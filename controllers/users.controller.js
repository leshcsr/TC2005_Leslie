exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/hot_cakes/lista'); //Este código se ejecuta cuando la sesión se elimina.
    });
};

exports.get_signup = (request, response, next) => {
    response.render('signup');
};