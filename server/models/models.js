const { Pool } = require('pg');

const PG_URI = 'postgres://knvetpkv:N0LF6K4lrJXkgIUeaKupSZ1JLztQvbCo@ruby.db.elephantsql.com:5432/knvetpkv'


const pool = new Pool({
  connectionString: PG_URI,
});


module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
