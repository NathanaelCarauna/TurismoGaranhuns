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
}