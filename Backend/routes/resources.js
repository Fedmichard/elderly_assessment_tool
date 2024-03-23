var express = require('express');
var router = express.Router();

// creates resource
router.post('/create_resource', function (req,res){
    let form = req.body;
    let cmd = 'INSERT INTO resources Set ?'
    conn.query(cmd, form, err => {
        if (err) throw err;
        res.end();
    });
});

// lists all resources
router.get('/list_resources', (req, res) => {
    var cmd = 'Select * FROM resources';
    conn.query(cmd, (err, data) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "json" });
        res.write(JSON.stringify(data));
        res.end();
    });
});

// deletes resource
router.delete('/delete_resource/:id', (req, res) => {
    let id = req.params.id;
    let cmd = 'DELETE FROM resources WHERE idresources= ?';

    conn.query(cmd, id, (err, result) => {
        if (err) throw err;
        res.end();
    });
});

// updates resource
router.put('/update_resource/:id', (req, res) => {
    let id = req.params.id;
    let form = req.body;
    let cmd = 'UPDATE resources SET ? WHERE idresources=?';

    conn.query(cmd, [form, id], (err, result) => {
        if (err) throw err;
        res.end();
    });
});

module.exports = router;
