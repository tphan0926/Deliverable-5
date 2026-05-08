const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || "projectdb",
  user: process.env.DB_USER || "student1",
  password: process.env.DB_PASSWORD || "student123"
});

module.exports = pool;