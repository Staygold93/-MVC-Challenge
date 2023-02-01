const path = require('path');
const express = require('express');
// const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');


const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({});


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.set('views', './views');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);


app.listen(PORT);