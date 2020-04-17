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

```

# Commands
- [`create-grpc-app help [COMMAND]`](#create-grpc-app-help-command)
- [`create-grpc-app module [MODULENAME]`](#create-grpc-app-module-modulename)
- [`create-grpc-app new [APPNAME]`](#create-grpc-app-new-appname)

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

### Generated sample project structure example/todo_services
```bash
.
└── todo_services
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
    │   │   ├── post.repository.js
    │   │   └── post.service.js
    │   └── todo
    │       ├── todo.grpc.js
    │       ├── todo.handlers.js
    │       ├── todo.repository.js
    │       └── todo.service.js
    ├── package-lock.json
    ├── package.json
    ├── protos
    │   ├── post.proto
    │   └── todo.proto
    ├── server.js
    └── utils
        └── index.js
```

## `create-grpc-app module [MODULENAME]`

make new module

```
USAGE
  $ create-grpc-app module [MODULENAME]
```

After create new module with command
```bash
create-grpc-app module NAME

```
- Define protobuf service for the module in file PROJECT_DIR/protos/NAME.proto
- Implement service RPC methods in file PROJECT_DIR/module/NAME/name.handler.js










