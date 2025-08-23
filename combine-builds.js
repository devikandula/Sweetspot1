const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const folders = ["client", "admin", "branch-admin"];
const distRoot = path.join(__dirname, "dist");

// Clear old dist folder
if (fs.existsSync(distRoot)) {
  fs.rmSync(distRoot, { recursive: true, force: true });
}

// Create subfolders
folders.forEach((folder) => {
  const src = path.join(__dirname, folder, "dist");
  const dest = path.join(distRoot, folder);

  fs.mkdirSync(dest, { recursive: true });

  if (fs.existsSync(src)) {
    // Copy all files
    fs.readdirSync(src).forEach((file) => {
      fs.cpSync(path.join(src, file), path.join(dest, file), { recursive: true });
    });
  }
});

console.log("All builds combined into /dist successfully!");
