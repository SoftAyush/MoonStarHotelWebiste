const fs = require('fs');
const path = require('path');

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="32" height="32">
  <rect width="100" height="100" rx="20" fill="#07080A"/>
  <path d="M 50 10 A 38 38 0 1 0 86 62 A 32 32 0 1 1 50 10 Z" fill="#D4AF37"/>
  <polygon points="50,16 54,27 66,27 56,35 60,47 50,38 40,47 44,35 34,27 46,27" fill="#D4AF37"/>
  <path d="M 40 76 L 40 54 L 46 54 L 46 47 L 54 47 L 54 54 L 60 54 L 60 76 Z" fill="#D4AF37"/>
</svg>`;

// Write public/favicon.svg
fs.writeFileSync(path.join(__dirname, 'public', 'favicon.svg'), svgContent);
fs.writeFileSync(path.join(__dirname, 'public', 'icon.svg'), svgContent);
fs.writeFileSync(path.join(__dirname, 'app', 'icon.svg'), svgContent);
console.log('Favicon SVG files generated successfully.');
