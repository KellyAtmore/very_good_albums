const Pool = require("pg").Pool;
require("dotenv").config();

const devConfig = {
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
};

const proConfig = {
  connectionString: process.env.DATABASE_URL, //heroku addon
};

const pool = new Pool(
  process.env.NODE_ENV === "production" ? proConfig : devConfig
);

module.exports = pool;
