const fs = require('fs');
const path = require('path');

function processDirectory(directory) {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      let originalContent = content;
      
      // 1. Swap the hex code directly (case insensitive)
      content = content.replace(/#1f313f/gi, '#162f5d');
      content = content.replace(/1f313f/gi, '162f5d'); // In case it's in a URL like image URL or just text string
      
      // 2. Headings that use dark gray should be changed to this new navy color
      content = content.replace(/text-gray-900/g, 'text-[#162f5d]');
      content = content.replace(/text-gray-800/g, 'text-[#162f5d]');
      content = content.replace(/text-slate-900/g, 'text-[#162f5d]');
      content = content.replace(/text-slate-800/g, 'text-[#162f5d]');
      
      if (originalContent !== content) {
         fs.writeFileSync(fullPath, content, 'utf8');
         console.log(`Updated: ${fullPath}`);
      }
    }
  }
}

processDirectory(path.join(__dirname, '../src'));
console.log("Done updating navy theme.");
