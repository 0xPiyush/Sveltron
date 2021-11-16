const { app, BrowserWindow } = require("electron");
const path = require("path");

// setup hot reloading
try {
  require("electron-reloader")(module);
} catch (e) {}

app.whenReady().then(main);

// runs when electron is ready
function main() {
  // create a new window and load the index.html
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 800,
    minHeight: 600,
    icon: path.join(__dirname, "../public/favicon.png"),
    show: false,
    // ... other window settings go here
  });

  // load the svelte app inside a chromium window
  window.loadFile(path.join(__dirname, "../public/index.html"));

  window.once("ready-to-show", () => {
    window.show();
  });
}
