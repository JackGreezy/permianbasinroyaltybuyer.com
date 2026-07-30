#!/usr/bin/env node
/**
 * Injects Vercel Web Analytics script into all HTML files
 * This script adds the analytics code before the closing </head> tag
 */

const fs = require('fs');
const path = require('path');

// Vercel Analytics script for vanilla HTML sites
const ANALYTICS_SCRIPT = `
<!-- Vercel Web Analytics -->
<script>
  window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
</script>
<script defer src="/_vercel/insights/script.js"></script>
`;

function injectAnalytics(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if analytics is already injected
    if (content.includes('_vercel/insights/script.js') || content.includes('window.va')) {
      console.log(`✓ Analytics already present in ${filePath}`);
      return false;
    }

    // Find the closing </head> tag and inject before it
    const headCloseTag = '</head>';
    const headCloseIndex = content.lastIndexOf(headCloseTag);
    
    if (headCloseIndex === -1) {
      console.warn(`⚠ No </head> tag found in ${filePath}`);
      return false;
    }

    // Insert analytics script before </head>
    content = content.slice(0, headCloseIndex) + 
              ANALYTICS_SCRIPT + 
              content.slice(headCloseIndex);

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Injected analytics into ${filePath}`);
    return true;
  } catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error.message);
    return false;
  }
}

function findHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html') && !file.endsWith('.ref')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Find all HTML files in public directory (excluding .ref files)
const htmlFiles = findHtmlFiles('public');

console.log(`\nFound ${htmlFiles.length} HTML files to process\n`);

let injectedCount = 0;
htmlFiles.forEach(file => {
  if (injectAnalytics(file)) {
    injectedCount++;
  }
});

console.log(`\n✓ Successfully injected Vercel Analytics into ${injectedCount} files`);
console.log(`\nNote: Analytics will start tracking once you deploy to Vercel and enable Web Analytics in your dashboard.`);
