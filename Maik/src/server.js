const proffys = [
    {
        name: "Gabriel Rio",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "21 97516-3115",
        bio: "Entusiasta das melhores tecnologias de quimica avançada. <br><br> Apaixonado por explodir coisas em labortórios e por mudar a vida das pessoas atraés de experiêcias. Mais de 200.00 pessoas ja passaram por uma das minhas explosões.",
        subject: "Quimica",
        cost: "20,00",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Camula",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "21 97516-3115",
        bio: "Entusiasta das melhores tecnologias de quimica avançada. <br><br> Apaixonado por explodir coisas em labortórios e por mudar a vida das pessoas atraés de experiêcias. Mais de 200.00 pessoas ja passaram por uma das minhas explosões.",
        subject: "Quimica",
        cost: "20,00",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Fisica",
    "Física",
    "Geografia",
    "Historia",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

function getSubject(subjectNumber) {
    const arrayPosition = +subjectNumber - 1
    return subjects[arrayPosition]
}

function pageLanding(req, res) {
    return res.render("index.html");
}
function pageStudy(req, res) {
    const filters = req.query;
    return res.render("study.html", { proffys, filters, subjects, weekdays });
}
function pageGiveClasses(req, res) {
    const data =req.query
    
    //se tiver dados adicionar
    const isNotEmpty = Object.keys(data).length != 0
    if (isNotEmpty) {

        data.subject = getSubject(data.subject);
        //adicionar dados a lista de proffys
        proffys.push(data)

        return res.redirect("/study")
    }
    // se nao, mostrar a pagina
    return res.render("give-classes.html", {subjects, weekdays});
}

const express = require('express');
const server = express();
const nunjucks = require('nunjucks');

//Configurar nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true,

})

server //configurar arquivos estáticos (css, scripts, imagens)
    .use(express.static("public"))
    .get('/', pageLanding)
    .get('/study', pageStudy)
    .get('/give-classes', pageGiveClasses)
    .listen(5500);

