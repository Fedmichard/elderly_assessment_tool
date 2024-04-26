const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// pulls information on user if username and password match input
router.post('/login', async (req, res) => {
    let form = req.body
    if (!form.email || !form.password) {
        return res.json({ status: "error", error: "Please enter your email and password" })
    } else if (form.email.includes("#") || form.password.includes("#") ||
        form.email.includes(";") || form.password.includes(";") ||
        form.email.includes("=") || form.password.includes("=")) {
        return res.json({ status: "error", error: "Please do not enter #, ;, or =" })
    } else {
        conn.query('SELECT * FROM `users` WHERE email = ?', [form.email], async (err, result) => {
            if (err) throw err;
            if (!result.length || !await bcrypt.compare(form.password, result[0].password)) {
                return res.json({ status: "error", error: "Incorrect Email or Password" })
            } else {
                const token = jwt.sign({ id: result[0].idusers, firstname: result[0].first_name }, process.env.JWT_SECRET, {
                })

                const cookieOptions = {
                    expires: new Date(Date.now() + (process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000)),
                    secure: true,
                    path: '/',
                }

                res.cookie("RegisteredUser", token, cookieOptions)
                return res.json({ status: "success", success: "User has been logged in" })
            }
        })
    }
})

// creates user
router.post('/create_user', async (req, res) => {
    let form = req.body
    if (!form.email || !form.password) {
        return res.json({ status: "error", error: "Please enter email and password" })
    } else {

        conn.query('SELECT email FROM `users` WHERE email = ?', [form.email], async (err, result) => {
            if (err) throw err;
            if (result[0]) {
                return res.json({ status: "error", error: "Email already exists" })
            } else {
                bcrypt.hash(form.password, 8, (errr, hash) => {
                    if (errr) throw errr;
                    let values = [hash, form.first_name, form.last_name, form.email]
                    let cmd = 'INSERT INTO `users` (`password`, `first_name`, `last_name`, `email`) VALUES (?)'
                    conn.query(cmd, [values], error => {
                        if (error) throw error;
                        return res.json({ status: "success", success: "User has been registered" })
                    });
                })
            }
        })

    }
});

router.post('/logout', (req, res) => {
    res.clearCookie("RegisteredUser")
    return res.json({ status: "success", success: "User has been logged out" })
})

router.post('/updateTestsOne', (req, res) => {
    let form = req.body
    let values = [form.userId, form.score]
    let cmd = 'INSERT INTO `testsTaken` (`userid`, `score`) VALUES (?)';
    if (!form.userId || !form.score) {
        return res.json({ status: "error", error: "No score or user id attached" })
    } else {
        conn.query(cmd, [values], error => {
            if (error) throw error;
            return res.json({ status: "success", success: "Test score saved." })
        })
    }
})

router.post('/updateTestsTwo', (req, res) => {
    let form = req.body
    let values = [form.userId, form.score]
    let cmd = 'INSERT INTO `testsTakenTwo` (`userid`, `score`) VALUES (?)';
    if (!form.userId || !form.score) {
        return res.json({ status: "error", error: "No score or user id attached" })
    } else {
        conn.query(cmd, [values], error => {
            if (error) throw error;
            return res.json({ status: "success", success: "Test score saved." })
        })
    }
})

router.get('/getTestsOne', (req, res) => {
    let form = req.body
    let cmd = 'SELECT * FROM `testsTaken` WHERE userid = ?';
    let values = [form.userId]
    conn.query(cmd, [values], (error, result) => {
        if (error) throw error
        console.log(result)
        return res.json({ status: "success", success: result })
    })
})

module.exports = router;
