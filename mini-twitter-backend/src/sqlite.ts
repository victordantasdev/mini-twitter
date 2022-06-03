import sqlite3 from 'sqlite3';

const sql = sqlite3.verbose();
const db = new sql.Database(':memory:');

export const sqlite = () => {
  const row = db.serialize(() => {
    db.run('CREATE TABLE lorem (info TEXT)');
  
    const stmt = db.prepare('INSERT INTO lorem VALUES (?)');
    for (let i = 0; i < 10; i++) {
      stmt.run('Ipsum' + 1);
    }
    stmt.finalize();
  
    return db.each('SELECT rowid AS id, info FROM lorem', (err, row) => (
      !!err 
        ? err 
        : row
    ))
  });
  
  db.close();
  return row;
}
