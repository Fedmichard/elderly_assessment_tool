const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')

// pulls information on user if username and password match input
router.get('/sign_in', function (req, res){
    let cmd = 'SELECT * FROM `users` WHERE username = ? AND password = ?'
    const values = [
        req.body.email,
        req.body.password
    ]

    conn.query(cmd, [values], (err, results) => {
        if (err) {
            throw err;
        } if (results.length > 0) {
            res.send(results)
        } else {
            return res.json({Status: "Credentials Don't Match."})
        }
    })
})

// creates user
router.post('/create_user', (req, res) => {
    // our entered form values from the register directory
    const cmd = 'INSERT INTO `users` (`password`, `first_name`, `last_name`, `email`) VALUES (?)';
    const values = [
        req.body.password,
        req.body.first_name,
        req.body.last_name,
        req.body.email
    ]

    console.log(req.body);
    conn.query(cmd, [values], (err, results) => {
        if (err) {
            throw err;
        } else {
            return res.json({Status: "Success"})
        }
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
