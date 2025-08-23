const fs = require("fs");
const path = require("path");

const apps = ["client", "admin", "branch-admin"];
const distRoot = path.join(__dirname, "dist");

// Remove old dist if exists
if (fs.existsSync(distRoot)) {
  fs.rmSync(distRoot, { recursive: true, force: true });
}

// Copy each app's dist to root dist folder
apps.forEach((app) => {
  const src = path.join(__dirname, app, "dist");
  const dest = path.join(distRoot, app);

  if (!fs.existsSync(src)) {
    console.error(`Build not found for ${app}: ${src}`);
    return;
  }

  fs.mkdirSync(dest, { recursive: true });

  fs.readdirSync(src).forEach((file) => {
    fs.cpSync(path.join(src, file), path.join(dest, file), { recursive: true });
  });
});

console.log("All apps combined into /dist successfully!");
