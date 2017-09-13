var express = require('express');
var hbs = require('hbs');

var app = express();
var port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});


app.get('/', (req, res) => {
    res.render('home', {
        title: 'Home Page',
        page: 'Strona główna - domowa',
        welcome: 'Witam wszystkich na wpół serdecznie',
    });
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage:'błąd'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page',
        page: 'To jest about',
    });
});

app.get('/profile', (req, res) => {
    res.render('profile', {
        title: "Profil",
        page: "Mój profil",
        tekst: "Uczę się tworzyć strony za pomocą nodeJS"
    });
});

app.listen(port, 
 () => {console.log('Słucham na porcie ', port)}
);