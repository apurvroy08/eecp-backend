import mysql from "mysql2";

export const connectDb = () => {

    const connection = mysql.createConnection({
        host     : process.env.MYSQL_HOST,
        user     : process.env.MYSQL_USER,
        password : process.env.MYSQL_PASSWORD,
        database : process.env.MYSQL_DATABASE,
        // timezone : '+05:30' 
    });

  connection.connect(function (err) {
    if (err) {
      console.log("error in connection", err);
    } else {
      console.log("mysql connected");
    }
  });

  return connection;
}