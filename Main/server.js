const express = require('express');
const exphbs = require("express-handlebars");
const allRoutes = require('./controllers');
const sequelize = require('./config/connection');
const session = require("express-session");
// const path = require("path");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const { clog } = require('./middleware/clog');

const app = express();
const PORT = process.env.PORT || 3000;

// Import custom middleware, "cLog"
app.use(clog);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sess = {
    secret: process.env.SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 3
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    })
};
app.use(session(sess));

// Static directory
// app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static('public'));

// app uses handlebars in /Views 
const hbs = exphbs.create({});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");


app.use("/", allRoutes);

sequelize.sync({ force: false }).then(function () {
    app.listen(PORT, () => {
        console.log(`App listening at http://localhost:${PORT} 🚀`)
    });
});