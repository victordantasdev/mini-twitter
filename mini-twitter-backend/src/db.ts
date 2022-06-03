import mysql from 'mysql';

const con = mysql.createConnection({
  host: 'localhost',
  user: '',
  password: ''
});

export const db = () => {
  con.connect((err) => {
    !!err
      ? console.log(err)
      : console.log('Connected!');
  })
}
