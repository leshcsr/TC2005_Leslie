exports.logout = (request, response, next) => {
        request.session.destroy(() => {
            response.redirect('/modulo/lista'); //Este código se ejecuta cuando la sesión se elimina.
        });
    };