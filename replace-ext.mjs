import fs from "fs/promises";
import path from "path";

async function replaceInDir(dir) {
  const items = await fs.readdir(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    
    // Ignore .next, node_modules, .git
    if (fullPath.includes(".next") || fullPath.includes("node_modules") || fullPath.includes(".git")) {
      continue;
    }

    if (item.isDirectory()) {
      await replaceInDir(fullPath);
    } else if (item.isFile() && (fullPath.endsWith(".tsx") || fullPath.endsWith(".ts") || fullPath.endsWith(".css") || fullPath.endsWith(".json") || fullPath.endsWith(".js") || fullPath.endsWith("layout.tsx"))) {
      let content = await fs.readFile(fullPath, "utf-8");
      
      const original = content;
      
      // Regex replace:
      const regex = /(?<!favicon-megagoz)\.(png|jpe?g)(?=["'`?)\\])/gi;
      
      content = content.replace(regex, ".webp");
      
      content = content.replace(/logo\.png/gi, "logo.webp");
      content = content.replace(/megagoz-logo-mobil\.png/gi, "megagoz-logo-mobil.webp");

      if (content !== original) {
        console.log(`Updated ${fullPath}`);
        await fs.writeFile(fullPath, content, "utf-8");
      }
    }
  }
}

replaceInDir("./src");
