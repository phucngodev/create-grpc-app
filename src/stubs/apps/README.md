# Node gRPC application

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

