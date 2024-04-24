var express = require('express');
var router = express.Router();

// creates question // idk
router.post('/create_question', function (req,res){
    let form = req.body;
    let cmd = 'INSERT INTO questions Set ?'
    conn.query(cmd, form, err => {
        if (err) throw err;
        res.end();
    });
});

// lists all questions
router.get('/list_questions', (req, res) => {
    var cmd = 'Select * FROM questions';
    conn.query(cmd, (err, data) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "json" });
        res.write(JSON.stringify(data));
        res.end();
    });
});

// deletes question
router.delete('/delete_question/:id', (req, res) => {
    let id = req.params.id;
    let cmd = 'DELETE FROM questions WHERE idquestions= ?';

    conn.query(cmd, id, (err, result) => {
        if (err) throw err;
        res.end();
    });
});

// updates question
router.put('/update_question/:id', (req, res) => {
    let id = req.params.id;
    let form = req.body;
    let cmd = 'UPDATE questions SET ? WHERE idquestions=?';

    conn.query(cmd, [form, id], (err, result) => {
        if (err) throw err;
        res.end();
    });
});

module.exports = router;
