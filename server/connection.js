const mysql = require('mysql')

const pool = mysql.createPool(
    {
        connectionLimit: 10, //maximum number of connections that can be open in the pool simultaneously
        host: "127.0.0.1",// hostname or IP address of your MySQL server.
        user: "root",//  username you'll use to authenticate with the MySQL server
        password: "mysql1234",//  username you'll use to authenticate with the MySQL server
        database: "test1"//name of the database you want to connect to
    }
)

// use to indicate DB connection sucess or not
pool.getConnection((err, connection) => {
    if (err) {
        return console.log(err); // display if there any DB error
    }
    console.log('Database connected successfully'); // success message
    connection.release();
});

module.exports = pool;