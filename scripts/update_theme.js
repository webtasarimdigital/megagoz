const fs = require('fs');

const files = [
  './src/components/Header.tsx',
  './src/components/HeroSlider.tsx',
  './src/components/Footer.tsx'
];

files.forEach(f => {
  if (!fs.existsSync(f)) return;
  
  let content = fs.readFileSync(f, 'utf8');

  // Specific handling for Header nav link hovers -> Gold
  if (f.includes('Header.tsx')) {
    content = content.replace(/hover:text-\[#2c88ac\]/g, 'hover:text-[#ecbb3f]');
  }
  
  // Specific handling for HeroSlider pagination text & borders -> Gold
  if (f.includes('HeroSlider.tsx')) {
    content = content.replace(/text-\[#2c88ac\]/g, 'text-[#ecbb3f]');
    content = content.replace(/border-\[#2c88ac\]/g, 'border-[#ecbb3f]');
    content = content.replace(/bg-\[#2c88ac\]/g, 'bg-[#1f313f]'); // Arrow buttons -> Dark
  }

  // 1. Dark Theme Base
  content = content.replace(/#1f6388/g, '#1f313f');
  content = content.replace(/#2c88ac/g, '#1f313f'); // Any remaining goes to dark

  // 2. Accent Gold #ecbb3f replaces all previous yellows/oranges
  content = content.replace(/#F2AC1E/g, '#ecbb3f');
  content = content.replace(/#e85025/g, '#ecbb3f');
  content = content.replace(/#ff5733/g, '#ecbb3f');
  content = content.replace(/#c2401c/g, '#ecbb3f');

  fs.writeFileSync(f, content);
  console.log('Successfully updated theme colors in ' + f);
});
