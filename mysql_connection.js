//**************Start Mysql connection******************
var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'residential_commercial_lettings'
});
con.connect(function(error) {
    if (error) throw error;
    con.query("SELECT * FROM properties", function(err, result) {
        if (err) throw err;
        console.log("Results:", result);
    });
});

//**************End Mysql connection********************