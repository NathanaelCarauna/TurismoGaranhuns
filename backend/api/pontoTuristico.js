module.exports = app => {

    const save = (req, res) => {
        console.log("Request Received")
        console.log('Body: ' + req.body.toString())             
        
        app.db('pontosTuristicos')
            .insert({nome: req.body.nome, descricao: req.body.descricao})
            .then(() => res.status(204).send())
            .catch(err => res.status(400).json(err))
    }
    const getPontoTuristico = (req, res) => {
        app.db('pontosTuristicos as pt')
            .join('endereco as e', 'e.id', 'pt.id_endereco')            
            .select('e.id', 'e.rua', 'e.bairro', 'e.numero', 'pt.nome',
                    'pt.descricao')
            .where({"pt.id": req.params.id})            
            .then(endereco => {
                if(endereco){
                    return res.status(200).json(endereco);
                }else{
                    return res.status(400).send();
                }
            })
            .catch(err => res.status(500).json(err))
    }    

    const removePontoTuristico = (req, res) =>{
        console.log("Request Received")
        console.log('Params: ' + req.params)
        app.db('pontosTuristicos')
            .where({ id: req.params.id })
            .del()
            .then((result, err) => {
                if(result > 0){
                    res.status(204).send();
                }else{
                    const msg = "Erro ao excluir ponto turistico"
                    res.status(400).send(msg);
                }
            })
            .catch(err => res.status(500).json(err));
    }

    const updatePontoTuristico = (req, res) =>{        
        console.log("Request Received")
        console.log('Body: ' + req.body)
        
        var data = {
            nome: req.body.nome,
            descricao: req.body.descricao,
            id_endereco: req.body.id_endereco
        } 
        app.db('pontosTuristicos')
        .where({ id: req.params.id })               
        .update(data)
        .then(_ => res.status(204).send())
        .catch(err => res.status(400).json(err))
    }        

    return {save, getPontoTuristico, removePontoTuristico, updatePontoTuristico}
}