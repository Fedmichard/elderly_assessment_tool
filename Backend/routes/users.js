var express = require('express');
var router = express.Router();

// pulls information on user if username and password match input
router.get('/login', function (req,res){
    let form =req.body;
    let cmd = 'SELECT * WHERE username = ? AND password = ?'
})

// creates user
router.post('/create_user', function (req,res){
    let form = req.body;
    let cmd = 'INSERT INTO users Set ?'
    conn.query(cmd, form, err => {
        if (err) throw err;
        res.end();
    });
});

// lists all users
router.get('/list_users', (req, res) => {
    var cmd = 'Select idusers, username FROM users';
    conn.query(cmd, (err, data) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "json" });
        res.write(JSON.stringify(data));
        res.end();
    });
});

// deletes user
router.delete('/delete_user/:id', (req, res) => {
    let id = req.params.id;
    let cmd = 'DELETE FROM users WHERE idusers= ?';

    conn.query(cmd, id, (err, result) => {
        if (err) throw err;
        res.end();
    });
});

// updates user
router.put('/update_user/:id', (req, res) => {
    let id = req.params.id;
    let form = req.body;
    let cmd = 'UPDATE users SET ? WHERE iduser=?';

    conn.query(cmd, [form, id], (err, result) => {
        if (err) throw err;
        res.end();
    });
});

module.exports = router;
