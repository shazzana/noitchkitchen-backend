const dotenv = require('dotenv');

dotenv.config();

  const pg = require('knex')({
    client: 'pg',
    connection: process.env.DATABASE_URL,
    searchPath: ['knex', 'public'],
  });
  
  pg.on('connect', () => {
    console.log('Database connected successfully!');
  });
  
  module.exports = {
    query: (text, params) => pg.query(text, params),
  };

