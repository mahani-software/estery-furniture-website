import fs from "node:fs";
import path from "node:path";

const distDir = path.resolve("dist");

if (!fs.existsSync(distDir)) {
  console.error("dist directory does not exist. Run npm run build first.");
  process.exit(1);
}

// Copy index.html to 404.html for GitHub Pages SPA routing
const indexPath = path.join(distDir, "index.html");
const notFoundPath = path.join(distDir, "404.html");

if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, notFoundPath);
}

// Copy CNAME file to dist directory
if (fs.existsSync("CNAME")) {
  fs.copyFileSync("CNAME", path.join(distDir, "CNAME"));
}

console.log("Successfully prepared dist/ with index.html, 404.html, and CNAME for GitHub Pages.");
