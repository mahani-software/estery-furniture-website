import fs from "node:fs";
import path from "node:path";

const publicDir = path.resolve(".output/public");
const assetsDir = path.join(publicDir, "assets");

if (!fs.existsSync(publicDir)) {
  console.error(".output/public directory does not exist. Run npm run build first.");
  process.exit(1);
}

// Find main CSS and JS assets
const files = fs.readdirSync(assetsDir);
const cssFile = files.find((f) => f.startsWith("styles-") && f.endsWith(".css")) || files.find((f) => f.endsWith(".css"));
const jsFile = files.find((f) => f.startsWith("index-") && f.endsWith(".js")) || files.find((f) => f.endsWith(".js"));

const cssHref = cssFile ? `/assets/${cssFile}` : "";
const jsSrc = jsFile ? `/assets/${jsFile}` : "";

const htmlContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Estery Furniture — Handcrafted Furniture in Kampala</title>
    <meta name="description" content="Estery Furniture designs and builds premium sofas, beds, dining tables and accessories from our workshop in Kampala, Uganda." />
    <link rel="icon" href="/favicon.png" type="image/png" />
    ${cssHref ? `<link rel="stylesheet" href="${cssHref}" />` : ""}
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" />
  </head>
  <body>
    <div id="root"></div>
    ${jsSrc ? `<script type="module" src="${jsSrc}"></script>` : ""}
  </body>
</html>
`;

// Write index.html and 404.html for GitHub Pages SPA routing
fs.writeFileSync(path.join(publicDir, "index.html"), htmlContent, "utf-8");
fs.writeFileSync(path.join(publicDir, "404.html"), htmlContent, "utf-8");

// Ensure CNAME is present
if (fs.existsSync("CNAME")) {
  fs.copyFileSync("CNAME", path.join(publicDir, "CNAME"));
}

console.log("Successfully generated index.html, 404.html, and CNAME in .output/public");
