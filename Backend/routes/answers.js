var express = require('express');
var router = express.Router();

// creates answer
router.post('/create_answer', function (req,res){
    let form = req.body;
    let cmd = 'INSERT INTO answers Set ?'
    conn.query(cmd, form, err => {
        if (err) throw err;
        res.end();
    });
});

// lists all answers
router.get('/list_answers', (req, res) => {
    var cmd = 'Select * FROM answers';
    conn.query(cmd, (err, data) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "json" });
        res.write(JSON.stringify(data));
        res.end();
    });
});

// deletes answer
router.delete('/delete_answer/:id', (req, res) => {
    let id = req.params.id;
    let cmd = 'DELETE FROM answers WHERE idanswers= ?';

    conn.query(cmd, id, (err, result) => {
        if (err) throw err;
        res.end();
    });
});

// updates answer
router.put('/update_answer/:id', (req, res) => {
    let id = req.params.id;
    let form = req.body;
    let cmd = 'UPDATE answers SET ? WHERE idanswers=?';

    conn.query(cmd, [form, id], (err, result) => {
        if (err) throw err;
        res.end();
    });
});

module.exports = router;
