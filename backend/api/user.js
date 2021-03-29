const bcrypt = require('bcrypt');

module.exports = app => {
    const obterHash = (password, callback) => {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, null, (err, hash) => callback(hash))
        })
    }

    const save = (req, res) => {
        obterHash(req.body.password, hash => {
            const password = hash;

            app.db('users')
                .insert({nome: req.body.nome, email: req.body.email, password:password})
                .then(() => res.status(204).send())
                .catch(err => res.status(400).json(err))
        })
    }

    return { save }
}