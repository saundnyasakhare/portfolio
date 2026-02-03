#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const BASE_PATH = '/portfolio';
const OUT_DIR = path.join(__dirname, '..', 'out');

function fixAssetPaths(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Fix image src attributes that don't already have /portfolio prefix
  // Match: src="/img/ or src="/saundnyasakhare.png
  content = content.replace(/src="(\/(?!portfolio\/)(?:img\/[^"]+|saundnyasakhare\.png))"/g, (match, p1) => {
    modified = true;
    return `src="${BASE_PATH}${p1}"`;
  });

  // Fix CSS hrefs
  content = content.replace(/href="(\/css\/[^"]+)"/g, (match, p1) => {
    if (!p1.startsWith('/portfolio/')) {
      modified = true;
      return `href="${BASE_PATH}${p1}"`;
    }
    return match;
  });

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${path.relative(OUT_DIR, filePath)}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.html')) {
      fixAssetPaths(filePath);
    }
  });
}

console.log('Fixing asset paths in HTML files...');
walkDir(OUT_DIR);
console.log('Done!');
