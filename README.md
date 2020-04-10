create-grpc-app
===============

generate node grpc application

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```bash
$ npm install -g create-grpc-app
$ create-grpc-app COMMAND

running command...
$ create-grpc-app (-v|--version|version)
create-grpc-app/1.0.2 darwin-x64 node-v13.12.0
$ create-grpc-app --help [COMMAND]
USAGE
  $ create-grpc-app COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`create-grpc-app help [COMMAND]`](#create-grpc-app-help-command)
* [`create-grpc-app module [MODULENAME]`](#create-grpc-app-module-modulename)
* [`create-grpc-app new [APPNAME]`](#create-grpc-app-new-appname)

## `create-grpc-app help [COMMAND]`

display help for create-grpc-app

```
USAGE
  $ create-grpc-app help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```


## `create-grpc-app new [APPNAME]`

create new node gRPC apps

```
USAGE
  $ create-grpc-app new [APPNAME]

OPTIONS
  --db=db

DESCRIPTION
  USAGE
     $ create-grpc-app new [APPNAME]

     # generate project with mysql or postgresql
     $ create-grpc-app new [APPNAME] --db=mysql | postgresql
```

### Generated project structure

```bash
.
├── Dockerfile
├── README.md
├── database
│   ├── index.js
│   ├── migrations
│   │   └── 20200408130559_create_user_table.js
│   └── seeds
│       └── create_test_users.js
├── docker-compose.yml
├── ecosystem.config.js
├── grpc
│   └── index.js
├── knexFile.js
├── modules
│   └── todo
│       ├── todo.grpc.js
│       ├── todo.handlers.js
│       ├── todo.proto
│       ├── todo.repository.js
│       └── todo.service.js
├── package-lock.json
├── package.json
├── server.js
├── tags
└── utils
    └── index.js
```

_See code: [src/commands/new.js](https://github.com/phucngome/create-grpc-app/blob/v1.0.2/src/commands/new.js)_
<!-- commandsstop -->


## `create-grpc-app module [MODULENAME]`

make new module

```
USAGE
  $ create-grpc-app module [MODULENAME]
```

_See code: [src/commands/module.js](https://github.com/phucngome/create-grpc-app/blob/v1.0.2/src/commands/module.js)_

