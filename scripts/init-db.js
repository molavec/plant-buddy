const fs = require('fs');
const pg = require('pg');

const DATABASE_NAME = 'plant_buddy';
const FILENAME_SQL = 'init-db.sql';

const sql = fs.readFileSync(FILENAME_SQL, 'utf8');

const createDatabase = async () => {
  const pool = new pg.Pool({
      user: 'postgres',
      host: '127.0.0.1',
      password: 'timescale',
      port: '5432'}
  );
  
  const pool2 = new pg.Pool({
    user: 'postgres',
    host: '127.0.0.1',
    database: DATABASE_NAME,
    password: 'timescale',
    port: '5432'}
  );

  try {

    await pool.query(`DROP DATABASE IF EXISTS ${DATABASE_NAME} WITH (FORCE);`);
    await pool.query(`CREATE DATABASE ${DATABASE_NAME};`);
    pool.end();
    console.log('Database created');

    await pool2.query(sql);
    pool2.end();
    console.log('Table created');
    
  } catch (error) {

    console.log(error);

  }

};

createDatabase();