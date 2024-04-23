const jwt = require('jsonwebtoken')

const loggedIn = (req, res, next) => {
    if (!req.cookies.RegisteredUser) {
        return next()
    } else {
        try {
            const decoded = jwt.verify(req.cookies.RegisteredUser, process.env.JWT_SECRET)
            conn.query('SELECT * FROM `users` where id = ?', [decoded.id], (err, result) => {
                if (err) return next()
                req.user = result[0]
                return next();
            })
        } catch (err) {
            if (err) return next()
        }
    }
}

module.exports = loggedIn;