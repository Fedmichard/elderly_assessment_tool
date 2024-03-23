var express = require('express');
var router = express.Router();

// creates verifired_scam
router.post('/create_verifired_scam', function (req,res){
    let form = req.body;
    let cmd = 'INSERT INTO verifired_scams Set ?'
    conn.query(cmd, form, err => {
        if (err) throw err;
        res.end();
    });
});

// lists all verifired_scams
router.get('/list_verifired_scams', (req, res) => {
    var cmd = 'Select * FROM verifired_scams';
    conn.query(cmd, (err, data) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "json" });
        res.write(JSON.stringify(data));
        res.end();
    });
});

// deletes verifired_scam
router.delete('/delete_verifired_scam/:id', (req, res) => {
    let id = req.params.id;
    let cmd = 'DELETE FROM verifired_scams WHERE idverifired_scams= ?';

    conn.query(cmd, id, (err, result) => {
        if (err) throw err;
        res.end();
    });
});

// updates verifired_scam
router.put('/update_verifired_scam/:id', (req, res) => {
    let id = req.params.id;
    let form = req.body;
    let cmd = 'UPDATE verifired_scams SET ? WHERE idverifired_scams=?';

    conn.query(cmd, [form, id], (err, result) => {
        if (err) throw err;
        res.end();
    });
});

module.exports = router;
