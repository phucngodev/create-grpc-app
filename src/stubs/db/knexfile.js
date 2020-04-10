const path = require("path");
const { env } = require("./utils");

module.exports = {
  development: {
    {{#if (isMysql db)}}
    client: "mysql2",
    {{/if}}
    {{#if (isPg db)}}
    client: "pg",
    {{/if}}
    connection: {
      host: env("DB_HOST", "127.0.0.1"),
      user: env("DB_USER", "dev"),
      port: env('DB_PORT', 3306),
      password: env("DB_PASSWORD", "dev12345"),
      database: env("DB_NAME", "nodeapp"),
    },
    pool: {
      min: env("DB_POOL_MIN", 2),
      max: env("DB_POOL_MAX", 10),
    },
    migrations: {
      tableName: "migrations",
      directory: path.join(__dirname, "database/migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "database/seeds"),
    },
  },

  stagging: {
    {{#if (isMysql db)}}
    client: "mysql2",
    {{/if}}
    {{#if (isPg db)}}
    client: "pg",
    {{/if}}
    connection: {
      host: env("DB_HOST", "127.0.0.1"),
      user: env("DB_USER", "dev"),
      port: env('DB_PORT', 3306),
      password: env("DB_PASSWORD", "dev12345"),
      database: env("DB_NAME", "nodeapp"),
    },
    pool: {
      min: env("DB_POOL_MIN", 2),
      max: env("DB_POOL_MAX", 10),
    },
    migrations: {
      tableName: "migrations",
      directory: path.join(__dirname, "database/migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "database/seeds"),
    },
  },

  production: {
    {{#if (isMysql db)}}
    client: "mysql2",
    {{/if}}
    {{#if (isPg db)}}
    client: "pg",
    {{/if}}
    connection: {
      host: env("DB_HOST", "127.0.0.1"),
      user: env("DB_USER", "dev"),
      port: env('DB_PORT', 3306),
      password: env("DB_PASSWORD", "dev12345"),
      database: env("DB_NAME", "nodeapp"),
    },
    pool: {
      min: env("DB_POOL_MIN", 2),
      max: env("DB_POOL_MAX", 10),
    },
    migrations: {
      tableName: "migrations",
      directory: path.join(__dirname, "database/migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "database/seeds"),
    },
  },
};
