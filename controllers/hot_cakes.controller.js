const HotCake = require('../models/lab14.model');  

exports.get_lista = (request, response, next) => {
    const cookies = request.get('Cookie') || '';
    let consultas = cookies.split('=')[1] || 0;
    consultas++;

    response.setHeader('Set-Cookie', 'consultas=' + consultas + '; HttpOnly');

    response.render('lista', { 
        hot_cakes: HotCake.fetchAll(),
        ultimo_hot_cake: request.session.ultimo_hot_cake || '',
    });


};

exports.get_nuevo = (request, response, next) => {
    response.render('nuevo');
};

exports.post_nuevo = (request, response, next) => {
    
    const hot_cake = new HotCake({
        nombre: request.body.nombre,
        descripcion: request.body.descripcion,
        handle: request.body.handle,
        ingredientes: request.body.ingredientes,
        precio: request.body.precio,
    });
    
    hot_cake.save();

    request.session.ultimo_hot_cake = hot_cake.nombre;
    
    response.status(300).redirect('/hot_cakes/lista');
};

exports.get_pedir = (request, response, next) => {
    let html = `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
                <title>Escoge tu desayuno</title>
            </head>
            <body>
            <br> <br>
            <div class="container is-max-desktop">
            <div class="notification is-primary">
                <h1>Hot cakes</h1>
                <form action="/modulo/pedir" method="POST">
                    <fieldset>
                        <legend>Escoge tu desayuno:</legend>
                        <div>
                            <input type="checkbox" id="malteada" name="malteada">
                            <label for="malteada">Malteada</label>
                        </div>
                        <div>
                            <input type="checkbox" id="cafe" name="cafe">
                            <label for="cafe">Café</label>
                        </div>
                        <div>
                            <input type="number" id="hot_cakes" name="hot_cakes" value="0" min="0">
                            <label for="hot_cakes"> hot cakes</label>
                        </div>
                    </fieldset>
                    <br>
                    <input type="submit" value="pedir">
                </form>
            
                </div>
                </div>
            </body>
        </html>
    `;
    response.send(html);
};

exports.post_pedir = (request, response, next) => {
    console.log(request.body)
    response.send("Pediste " + request.body.hot_cakes + " hot cakes");
}

exports.get_pedido = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
}