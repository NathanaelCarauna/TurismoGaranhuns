module.exports = app => {
    //USER API
    app.post('/signup', app.api.user.save);
    app.post('/signin', app.api.auth.signin);
    
    app.route('/updateUser/:id')
        .all(app.config.passport.authenticate())
        .patch(app.api.user.updateUser)
    
    app.route('/removeUser/:id')
        .all(app.config.passport.authenticate())
        .delete(app.api.user.removeUser)
}