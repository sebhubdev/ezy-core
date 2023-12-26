const spawn = require("cross-spawn");
const path = require("path");
const fs = require("fs");

const newSassVars = {
  // COLOR
  $primary: ["color(primary)", "color(mono, darksofthover)"],
  $secondary: "color(secondary)",
  "$secondary-light": "color(secondary, light)",
  $tertiary: "color(tertiary)",
  $light: "color(mono, light)",
  $transLight: "color(mono, transLight)",
  $dark: "color(mono, dark)",
  $border: "color(border)",
  $text: "color(text)",
  "$text-md": "color(text, medium)",
  $bg: "color(background)",
  "$bg-grey": "color(background, grey)",
  "$alert-success": "color(alert, success)",
  "$alert-warning": "color(alert, warning)",
  "$alert-danger": "color(alert, danger)",
  "$font-primary": [
    "default(font-family)",
    "default(font-family, light)",
    "default(font-family, fancy)",
  ],
  "$font-secondary": "default(font-family, secondary)",
  "$font-tertiary": "default(font-family, tertiary)",
  "$weight-md": "default(weight, medium)",
  "$weight-bold": "default(weight, bold)",
  $radius: "default(radius)",
};

const changeSassVars = async (filePath, newSassVars) => {
  await Promise.all(
    Object.keys(newSassVars).map(async (attr) => {
      return await new Promise((resolve) => {
        setTimeout(function () {
          if (Array.isArray(newSassVars[attr])) {
            newSassVars[attr].map((value) => {
              const regexp = `s/${value}/${attr}/g`;
              spawn("sed", [regexp, "-i", "-s", filePath]);
            });
            resolve();
          }

          const regexp = `s/${newSassVars[attr]}/${attr}/g`;
          spawn("sed", [regexp, "-i", "-s", filePath]);
          resolve();
        }, 500);
      });
    })
  );
};

const filesPath = path.resolve(process.cwd(), "src/web/");

const changeFiles = async (filesPath) => {
  return await Promise.all(
    fs.readdirSync(filesPath).map(async (file) => {
      const filePath = path.join(filesPath, file);
      if (fs.lstatSync(filePath).isFile()) {
        if (path.extname(filePath) !== ".scss") return;
        await changeSassVars(filePath, newSassVars);
        console.log(filePath);
      } else {
        return changeFiles(filePath);
      }
    })
  );
};

changeFiles(filesPath);
