const fs = require("fs");
const PNG = require("pngjs").PNG;

const inputPath = process.argv[2];
const outputPath = process.argv[3];

fs.createReadStream(inputPath)
  .pipe(new PNG({ filterType: 4 }))
  .on("parsed", function () {
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        const idx = (this.width * y + x) << 2;
        
        let r = this.data[idx];
        let g = this.data[idx + 1];
        let b = this.data[idx + 2];
        let a = this.data[idx + 3];

        if (a === 0) continue;

        let max = Math.max(r, g, b);
        let min = Math.min(r, g, b);
        
        // If the pixel is roughly neutral / grayscale (low saturation)
        // Background is around [52, 61, 72] -> max-min = 20
        // White text is [255, 255, 255] -> max-min = 0
        // Yellow text is [200+, 150+, <100] -> max-min > 100
        // Blue eye is [low, mid, high] -> max-min > 50
        if (max - min < 45) { // It's a grayscale/dark blueish gray tint
           let v = (r + g + b) / 3;
           
           // Background v is roughly 61
           // White text v is 255
           // Map v=61 -> White [255, 255, 255]
           // Map v=255 -> Dark [52, 61, 72]
           
           let t = (v - 55) / (255 - 55);
           if (t < 0) t = 0;
           if (t > 1) t = 1;
           
           // Invert lerp: t=0 -> White, t=1 -> Dark
           let newR = Math.round(255 * (1 - t) + 52 * t);
           let newG = Math.round(255 * (1 - t) + 61 * t);
           let newB = Math.round(255 * (1 - t) + 72 * t);
           
           this.data[idx] = newR;
           this.data[idx + 1] = newG;
           this.data[idx + 2] = newB;
        }
      }
    }

    this.pack().pipe(fs.createWriteStream(outputPath))
      .on('finish', () => {
         console.log("Image processed successfully: " + outputPath);
      });
  })
  .on("error", (err) => {
    console.error("Error reading PNG:", err);
  });
