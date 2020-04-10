const path = require("path");
const fs = require("fs-extra");
const { hbs } = require("../utils");

function createNewModule(moduleName) {
  const srcFolder = path.resolve(__dirname, "../stubs/module");
  const destFolder = path.resolve(process.cwd(), "modules", moduleName);
  const files = fs.readdirSync(srcFolder);

  const data = { name: moduleName };
  for (let file of files) {
    let inputFile = `${path.resolve(srcFolder)}/${file}`;
    let outputFile = path.resolve(destFolder, file.replace("name", moduleName));
    let template = hbs.compile(fs.readFileSync(inputFile).toString());
    let content = template(data);
    fs.outputFileSync(outputFile, content);
  }

  console.log(`created new module ${destFolder}`);
}

module.exports = {
  createNewModule,
};
