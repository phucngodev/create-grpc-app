create-grpc-app
===============

generate node grpc application

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/create-grpc-app.svg)](https://npmjs.org/package/create-grpc-app)
[![Downloads/week](https://img.shields.io/npm/dw/create-grpc-app.svg)](https://npmjs.org/package/create-grpc-app)
[![License](https://img.shields.io/npm/l/create-grpc-app.svg)](https://github.com/phucngome/create-grpc-app/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g create-grpc-app
$ create-grpc-app COMMAND
running command...
$ create-grpc-app (-v|--version|version)
create-grpc-app/1.0.0 darwin-x64 node-v13.12.0
$ create-grpc-app --help [COMMAND]
USAGE
  $ create-grpc-app COMMAND OPTIONS
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`create-grpc-app help [COMMAND]`](#create-grpc-app-help-command)
* [`create-grpc-app module`](#create-grpc-app-module)
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

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_

## `create-grpc-app module`

Describe the command here

```
USAGE
  $ create-grpc-app module

OPTIONS
  -n, --name=name  name to print

```
## To create new module/service
- Create Post service for current project
```bash
create-grpc-app module post
```

- Defines modules/post/post.proto protobuf
- Implement rpc handler for proto in modules/post/post.handlers.js

each newly generated module/service has sample sayHello RPC for reference

_See code: [src/commands/module.js](https://github.com/phucngome/create-grpc-app/blob/v1.0.0/src/commands/module.js)_

## `create-grpc-app new [APPNAME]`[OPTOIONS]

-

generate new grpc project

```
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
│   ├── post
│   │   ├── post.grpc.js
│   │   ├── post.handlers.js
│   │   ├── post.proto
│   │   ├── post.repository.js
│   │   └── post.service.js
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
_See code: [src/commands/new.js](https://github.com/phucngome/create-grpc-app/blob/v1.0.0/src/commands/new.js)_
<!-- commandsstop -->
