var db = require('mysql');
var connection = db.createConnection({
    host: "localhost",
    user: "root",
    password: "1111",
    database: "message"
});
module.exports = {
    add_status: function (s, res) {
        var query = "insert into status(s_text) values ('" + s.status + "')";
        connection.query(query, function (err, rows) {
            if (err) {
                console.log("Connot execute");
                console.log(err);
            }
            else {
                console.log("Status " + s.status + " is been added to Database");

                res.end("Yes");
            }
        });
    }
};