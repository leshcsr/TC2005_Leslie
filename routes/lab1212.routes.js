const express = require('express');
const path = require('path');
const router = express.Router();

const publicaciones = [
    {
        nombre: "Joy",
        imagen: "https://i.pinimg.com/564x/a6/6b/02/a66b0214db4edd38bea00860e96f08e2.jpg",
        descripcion: "Cada año, como tarea personal trato de hacer una nueva creación para esta serie de fotos y me inspira mucho ver cómo cada año, aprendo una nueva técnica de trabajo y mi manera de crear se ve reflejada en esta serie que tiene de resultado mis obras más felices y coloridas ",
        handle: "@bykrishnaVR",
    },
    {
        nombre: "Headless Leslie",
        imagen: "https://i.pinimg.com/564x/ae/e0/c1/aee0c1312f58ab9438553ef93e9a30bd.jpg",
        descripcion: "*Cabezas intercambiables! \n *Pensamientos e ideas no incluidos.",
        handle: "@bykrishnaVR",
    },
    {
        nombre: "8M",
        imagen: "https://i.pinimg.com/564x/50/93/f4/5093f459865af390e64920bb98ec9329.jpg",
        descripcion: "hoy sigue siendo un día de lucha 🌹 y nos queda muchísimo para poder celebrar este 8 de marzo. Tengo muchísima suerte de tener una familia y tener un trabajo donde mi voz tiene importancia y no menos por el hecho de ser mujer pero por eso quisiera que todas lo viviéramos así. Por eso existe este día, para ALZAR la voz de las mujeres que ya no están, y de todas las que viven con miedo y en silencio.. somos historia. Que haya respeto y amor para TODAS el día de hoy Y SIEMPRE",
        handle: "@bykrishnaVR",
    },
    {
        nombre: "I wonder",
        imagen: "https://i.pinimg.com/564x/8a/ef/9f/8aef9fc2699ea95472cae45dc9d9f507.jpg",
        descripcion: "if I will ever find a language to speak of the things that haunt me the most.",
        handle: "@bykrishnaVR",
    },
    {
        nombre: "Luz",
        imagen: "https://scontent-dfw5-1.cdninstagram.com/v/t51.2885-15/169235322_784992155768687_2599173889043649970_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-dfw5-1.cdninstagram.com&_nc_cat=111&_nc_ohc=yW2NM7TrN7UAX9XDkek&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MjU0NjIxOTQyMTA2ODkzMjExMA%3D%3D.2-ccb7-5&oh=00_AfCZFlUCQkB5VJTsk9c3YdipjTc3oi1JkJQi10gDokrrtg&oe=64150622&_nc_sid=6136e7",
        descripcion: "Inserte Poema",
        handle: "@leshcsr",
    },
    {
        nombre: "Crista",
        imagen: "https://scontent-dfw5-2.cdninstagram.com/v/t51.2885-15/151369173_458061805332116_1674039972883558487_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_cat=108&_nc_ohc=pBBphuMaXokAX9xVH59&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MjUxNTA0ODgwMTE3ODQ0ODE1OA%3D%3D.2-ccb7-5&oh=00_AfCd1_KmTIXiwal4YDaWRcKdwXt0yADrZxy9-cT56T333A&oe=6414B497&_nc_sid=6136e7",
        descripcion: "¿Por qué tienen suerte los malos y son felices los traidores?",
        handle: "@leshcsr",
    }
];

router.get('/ruta4', (request, response, next) => {
    response.render('posts', {posts: publicaciones});
});
router.get('/ruta5', (request, response, next) => {
    let html = '';
    response.send(html);
});

//Usamos el metodo POST 
router.post('/ruta4', (request, response, next) => {
    console.log(request.body)
});
router.post('/ruta5', (request, response, next) => {
    console.log(request.body)
});

module.exports = router;