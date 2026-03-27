import mysql from 'mysql2/promise';

async function test() {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'estatelink'
    });
    console.log('Connected!');
    await connection.end();
  } catch (e) {
    console.error(e);
  }
}

test();
