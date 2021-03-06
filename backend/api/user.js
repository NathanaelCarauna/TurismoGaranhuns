const bcrypt = require('bcrypt-nodejs');

module.exports = app => {
    const obterHash = (password, callback) => {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, null, (err, hash) => callback(hash))
        })
    }

    const save = (req, res) => {
        console.log("Request Received")
        console.log('Body: ' + req.body)
        obterHash(req.body.password, hash => {
            const password = hash;
            
            app.db('users')
                .insert({nome: req.body.nome, email: req.body.email.toLowerCase(), password:password})
                .then(() => res.status(204).send())
                .catch(err => res.status(400).json(err))
        })
    }

    // const getAll = (req, res) =>{
    //     var users = []
    //     app.db('users')            
    //         .select("nome")
    //         .then(user => users.push(user))
    //         .catch(err => res.status(500).json(err))
    //     return res.status(200).json({users})
    // }

    const getUser = (req, res) => {
        console.log("Request Received")
        console.log('Params: ' + req.params)
        app.db('users')
            .where({id: req.params.id})
            .first()
            .then(user => {
                if(user){
                    return res.status(200).json(user);
                }else{
                    return res.status(400).send();
                }
            })
            .catch(err => res.status(500).json(err))
    }

    const removeUser = (req, res) =>{
        console.log("Request Received")
        console.log('Params: ' + req.params)
        app.db('users')
            .where({ id: req.params.id })
            .del()
            .then((result, err) => {
                if(result > 0){
                    res.status(204).send();
                }else{
                    const msg = "Erro ao excluir sua conta de usuário"
                    res.status(400).send(msg);
                }
            })
            .catch(err => res.status(500).json(err));
    }

    const updateUser = (req, res) =>{        
        console.log("Request Received")
        console.log('Body: ' + req.body)
        if(req.body.password){
            obterHash(req.body.password, hash => {
                const password = hash;
                update(password)
            })
        }else{
            update()
        }
        function update(password){
            var data = {
                nome: req.body.nome,
                email: req.body.email ? req.body.email.toLowerCase() : null,
                password : password
            }        
            var dataToUpdate = {}
            if(data.nome && !data.email && !data.password){            
                dataToUpdate = {nome: data.nome}
            }
            if(data.nome && data.email && !data.password){
                dataToUpdate = {nome: data.nome, email: data.email}
            }
            if(data.nome && data.email && data.password){
                dataToUpdate = {nome: data.nome, email: data.email, password: data.password}
            }
            if(data.nome && !data.email && data.password){
                dataToUpdate = {nome: data.nome, password: data.password}
            }
            if(!data.nome && data.email && data.password){
                dataToUpdate = {email: data.email, password: data.password}
            }
            if(!data.nome && data.email && !data.password){
                dataToUpdate = {email: data.email}
            }
            if(!data.nome && !data.email && data.password){
                dataToUpdate = {password: data.password}
            }
            
            app.db('users')
            .where({ id: req.params.id })               
            .update(dataToUpdate)
            .then(_ => res.status(204).send())
            .catch(err => res.status(400).json(err))
        }
    }
    return { save, updateUser, removeUser, getUser }
}