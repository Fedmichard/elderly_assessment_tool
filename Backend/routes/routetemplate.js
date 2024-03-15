var express = require('express');
var router = express.Router();

router.post('/add', function (req,res){
    let form = req.body;
    let cmd = ''
    conn.query(cmd, form, err => {
        if (err) throw err;
        res.end();
    });
});

router.get('/list', (req, res) => {
    var cmd = '';
    conn.query(cmd, (err, data) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "json" });
        res.write(JSON.stringify(data));
        res.end();
    });
});

router.delete('/delete/:id', (req, res) => {
    let id = req.params.id;
    let cmd = '';

    conn.query(cmd, id, (err, result) => {
        if (err) throw err;
        res.end();
    });
});

router.put('/update/:id', (req, res) => {
    let id = req.params.id;
    let form = req.body;
    let cmd = '';

    conn.query(cmd, [form, id], (err, result) => {
        if (err) throw err;
        res.end();
    });
});

module.exports = router;
