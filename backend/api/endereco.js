module.exports = app => {

    const save = (req, res) => {
        console.log("Request Received")
        console.log('Body: ' + req.body.toString())             
        
        app.db('endereco')
            .insert({rua: req.body.rua, numero: req.body.numero, bairro: req.body.bairro})
            .then(() => res.status(204).send())
            .catch(err => res.status(400).json(err))
    }
    
    const getEndereco = (req, res) => {
        app.db('endereco')
        .where({id: req.params.id})
        .first()
        .then(endereco => {
            if(endereco){
                return res.status(200).json(endereco);
            }else{
                return res.status(400).send();
            }
        })
        .catch(err => res.status(500).json(err))
    }    

    const removeEndereco = (req, res) =>{
        console.log("Request Received")
        console.log('Params: ' + req.params)
        app.db('endereco')
            .where({ id: req.params.id })
            .del()
            .then((result, err) => {
                if(result > 0){
                    res.status(204).send();
                }else{
                    const msg = "Erro ao excluir endereço"
                    res.status(400).send(msg);
                }
            })
            .catch(err => res.status(500).json(err));
    }

    const updateEndereco = (req, res) =>{        
        console.log("Request Received")
        console.log('Body: ' + req.body)
        
        var data = {
            rua: req.body.rua,
            bairro: req.body.bairro,
            numero: req.body.numero
        } 
        app.db('endereco')
        .where({ id: req.params.id })               
        .update(data)
        .then(_ => res.status(204).send())
        .catch(err => res.status(400).json(err))
    }        


    return { save, getEndereco, removeEndereco, updateEndereco}    
}