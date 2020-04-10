create-grpc-app
===============

generate node grpc application

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

_See code: [src/commands/new.js](https://github.com/phucngome/create-grpc-app/blob/v1.0.0/src/commands/new.js)_

## Generated project structure
```
.
├── Dockerfile
├── README.md
├── docker-compose.yml
├── ecosystem.config.js
├── grpc
│   └── index.js
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
└── utils
    └── index.js
```


<!-- commandsstop -->

## `create-grpc-app module [MODULENAME]`

make new module

```
USAGE
  $ create-grpc-app module [MODULENAME]
```

_See code: [src/commands/module.js](https://github.com/phucngome/create-grpc-app/blob/v1.0.0/src/commands/module.js)_

