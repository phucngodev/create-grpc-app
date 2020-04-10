const chalk = require("chalk");
const { Command, flags } = require("@oclif/command");
const { createNewModule } = require("../handlers/module.js");

class ModuleCommand extends Command {
  static args = [{ name: "moduleName" }];
  static description = `make new module`;

  async run() {
    const { args } = this.parse(ModuleCommand);

    const { moduleName } = args;
    if (!moduleName) {
      this.log(chalk.red("module name is required!"));
      process.exit(1);
    }

    this.log(`Creating ${moduleName} project`);
    createNewModule(moduleName);
    this.log(
      `\n\n========================${chalk.green(
        "DONE",
      )}==============================\n\n`,
    );
  }
}

module.exports = ModuleCommand;
