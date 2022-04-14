const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

//Moteur de templates
app.set('view engine', 'ejs');

// Middleware
app.use('/assets',express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Routes
app.get('/', (request, response) => {
    response.render("pages/index", {text: "Salut!"});
});

app.post('/', (req, res) => {
    if (req.body.message === undefined || req.body.message === '') {
        res.render('pages/index', {error: "Vous n'avez pas rentrez de message ! :("});
    }
})

app.listen(port);