const path = require("path");
const fs = require("fs-extra");
const chalk = require("chalk");
const { hbs } = require("../utils");

function createNewModule(moduleName) {
  const srcFolder = path.resolve(__dirname, "../stubs/module");
  const destFolder = path.resolve(process.cwd(), "modules", moduleName);
  const files = fs.readdirSync(srcFolder);

  const data = { name: moduleName };
  const moduleFiles = files.map(file => {
    return {
      inputFile: `${path.resolve(srcFolder)}/${file}`,
      outputFile: path.resolve(destFolder, file.replace("name", moduleName)),
    };
  });

  moduleFiles.push({
    inputFile: path.resolve(__dirname, "../stubs/proto", "name.proto"),
    outputFile: path.resolve(process.cwd(), "protos", `${moduleName}.proto`),
  });

  moduleFiles.forEach(file => {
    let template = hbs.compile(fs.readFileSync(file.inputFile).toString());
    let content = template(data);
    fs.outputFileSync(file.outputFile, content);
    console.log(chalk.green(`Created file ${file.outputFile}`));
  });

  console.log(chalk.green(`created new module ${destFolder}`));
}

module.exports = {
  createNewModule,
};
