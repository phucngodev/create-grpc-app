const path = require("path");
const fs = require("fs-extra");
const { execSync } = require("child_process");
const { hbs } = require("../utils");

function createNewApp(appName, db) {
  const destDir = path.resolve(process.cwd(), appName);
  if (fs.existsSync(destDir)) {
    console.error(`${destDir} has already existed`);
    process.exit(1);
  }
  // if (fs.existS)

  const srcAppDir = path.resolve(__dirname, "../stubs/apps");
  fs.ensureDirSync(destDir);
  fs.copySync(srcAppDir, destDir);

  const files = ["package.json", "ecosystem.config.js"];
  const parts = appName.split("/");
  const name = parts[parts.length - 1];
  const data = { name, db };

  for (let file of files) {
    let fileName = `${destDir}/${file}`;
    let template = hbs.compile(fs.readFileSync(fileName).toString());

    let content = template(data);
    fs.outputFileSync(fileName, content);
  }

  handleWithDB(db, appName);

  const currentDir = process.cwd();
  process.chdir(destDir);
  execSync("npm i");
  execSync("git init");

  process.chdir(currentDir);

  printFinalGuide(appName);
}

function handleWithDB(db, appName) {
  if (!db) {
    return;
  }

  const destFolder = path.resolve(process.cwd(), appName);

  fs.copySync(
    path.resolve(__dirname, "../stubs/db/database"),
    `${destFolder}/database`,
  );

  const knexFile = path.resolve(__dirname, "../stubs/db/knexfile.js");
  const outFileName = `${destFolder}/knexFile.js`;
  let template = hbs.compile(fs.readFileSync(knexFile).toString());

  const data = { db };
  let content = template(data);
  fs.outputFileSync(outFileName, content);
}

function printFinalGuide(appName) {
  const parts = appName.split("/");
  const name = parts[parts.length - 1];

  const guide = `
  Created ${name} application ${path.resolve(process.cwd(), appName)}

  change to ${name} directory
  cd ${appName}

  Start the ${name}
  npm start
  `;

  console.log(guide);
}

module.exports = {
  createNewApp,
};
