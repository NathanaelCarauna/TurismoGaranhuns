module.exports = app => {

    const save = (req, res) => {
        console.log("Request Received")
        console.log('Body: ' + req.body.toString())             
        
        app.db('selos')
            .insert({nome: req.body.nome})
            .then(() => res.status(204).send())
            .catch(err => res.status(400).json(err))
    }
    
    const getselos = (req, res) => {
        app.db('selos')
        .where({id: req.params.id})
        .first()
        .then(selos => {
            if(selos){
                return res.status(200).json(selos);
            }else{
                return res.status(400).send();
            }
        })
        .catch(err => res.status(500).json(err))
    }   
    
    const removeSelo = (req, res) =>{
        console.log("Request Received")
        console.log('Params: ' + req.params)
        app.db('selos')
            .where({ id: req.params.id })
            .del()
            .then((result, err) => {
                if(result > 0){
                    res.status(204).send();
                }else{
                    const msg = "Erro ao excluir selo"
                    res.status(400).send(msg);
                }
            })
            .catch(err => res.status(500).json(err));
    }

    const updateSelo = (req, res) =>{        
        console.log("Request Received")
        console.log('Body: ' + req.body)
        
        var data = {
            nome: req.body.nome,
            id_ponto_turistico: req.body.id_ponto_turistico
        } 
        app.db('selos')
        .where({ id: req.params.id })               
        .update(data)
        .then(_ => res.status(204).send())
        .catch(err => res.status(400).json(err))
    }        

    return { save, getselos, removeSelo, updateSelo}    
}