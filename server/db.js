const Pool = require("pg").Pool;

const pool = new Pool({
  user: "kellyatmore",
  host: "localhost",
  port: 5432,
  database: "very_good_albums",
});

module.exports = pool;
