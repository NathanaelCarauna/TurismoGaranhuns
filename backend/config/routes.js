module.exports = app => {
    //USER API
    app.post('/signup', app.api.user.save);
    app.post('/signin', app.api.auth.signin);
    
    // app.route('/user')
    //     // .all(app.config.passport.authenticate())
    //     .get(app.api.user.getAll)

    app.route('/user/:id')
        .all(app.config.passport.authenticate())
        .get(app.api.user.getUser)
        .patch(app.api.user.updateUser)
        .delete(app.api.user.removeUser)    
    
    app.post('/pontoturistico', app.api.pontoTuristico.save)
    app.route('/pontoturistico/:id')
        .get(app.api.pontoTuristico.getPontoTuristico)
        .delete(app.api.pontoTuristico.removePontoTuristico)
        .patch(app.api.pontoTuristico.updatePontoTuristico)

    app.post('/endereco', app.api.endereco.save)
    app.route('/endereco/:id')
        .get(app.api.endereco.getEndereco)
        .delete(app.api.endereco.removeEndereco)
        .patch(app.api.endereco.updateEndereco)
    
    app.post('/selos', app.api.selos.save)
    app.route('/selos/:id')
        .get(app.api.selos.getselos)
        .delete(app.api.selos.removeSelo)
        .patch(app.api.selos.updateSelo)
}