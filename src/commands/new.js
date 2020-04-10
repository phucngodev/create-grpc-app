const { Command, flags } = require("@oclif/command");
const { createNewApp } = require("../handlers/new.js");

class NewCommand extends Command {
  static args = [{ name: "appName" }];
  static flags = {
    db: flags.string(),
  };
  static description = `create new node gRPC apps
  USAGE
  $ create-grpc-app new [APPNAME]

  # generate project with mysql or postgresql
  $ create-grpc-app new [APPNAME] --db=mysql | postgresql

  `;

  async run() {
    const { args, flags } = this.parse(NewCommand);

    const { appName } = args;
    const { db } = flags;
    if (!appName) {
      this.log(`module name is required!`);
      process.exit(1);
    }

    const allowDBs = ["mysql", "postgresql"];
    if (db && !allowDBs.includes(db)) {
      console.error(`supported db is [mysql, postgresql]`);
      process.exit(1);
    }

    createNewApp(appName, db);
  }
}

module.exports = NewCommand;
