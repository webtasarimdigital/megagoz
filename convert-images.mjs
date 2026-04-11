import fs from "fs/promises";
import path from "path";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

async function optimizeImages() {
  const publicDirs = ["./public", "./public/images"];
  
  for (const dir of publicDirs) {
    try {
      const files = await fs.readdir(dir);
      
      for (const file of files) {
        if (!file.match(/\.(png|jpg|jpeg)$/i) || file.startsWith("favicon")) continue;
        
        const fullPath = path.join(dir, file);
        const parsed = path.parse(fullPath);
        const outPath = path.join(dir, parsed.name + ".webp");
        
        console.log(`Converting ${fullPath} to webp...`);
        await execAsync(`npx -y sharp-cli@2.1.1 -v -i "${fullPath}" -o "${outPath}" webp`);
        
        await fs.unlink(fullPath);
        console.log(`Deleted ${fullPath}`);
      }
    } catch (e) {
      console.error(e);
    }
  }
  console.log("Done");
}

optimizeImages();
