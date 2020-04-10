const { Command, flags } = require("@oclif/command");
const { createNewModule } = require("../handlers/module.js");

class ModuleCommand extends Command {
  static args = [{ name: "moduleName" }];
  static description = `make new module`;

  async run() {
    const { args } = this.parse(ModuleCommand);

    const { moduleName } = args;
    if (!moduleName) {
      this.log(`module name is required!`);
      process.exit(1);
    }

    createNewModule(moduleName);
  }
}

module.exports = ModuleCommand;
