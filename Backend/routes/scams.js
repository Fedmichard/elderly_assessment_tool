var express = require('express');
var router = express.Router();


// creates scam
router.post('/create_scam', function (req,res){
    let form = req.body;
    let cmd = 'INSERT INTO scams Set ?'
    conn.query(cmd, form, err => {
        if (err) throw err;
        res.end();
    });
});

// lists all scams
router.get('/list_scams', (req, res) => {
    var cmd = 'Select * FROM scams';
    conn.query(cmd, (err, data) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "json" });
        res.write(JSON.stringify(data));
        res.end();
    });
});

// deletes scam
router.delete('/delete_scam/:id', (req, res) => {
    let id = req.params.id;
    let cmd = 'DELETE FROM scams WHERE idscams= ?';

    conn.query(cmd, id, (err, result) => {
        if (err) throw err;
        res.end();
    });
});

// updates scam
router.put('/update_scam/:id', (req, res) => {
    let id = req.params.id;
    let form = req.body;
    let cmd = 'UPDATE scams SET ? WHERE idscams=?';

    conn.query(cmd, [form, id], (err, result) => {
        if (err) throw err;
        res.end();
    });
});

module.exports = router;
