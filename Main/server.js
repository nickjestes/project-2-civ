const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog');

// const routes = require('./routes');

const app = express();

const PORT = process.env.PORT || 3003;

// Import custom middleware, "cLog"
app.use(clog);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// TODO: currently will crash server when including api routes, and the cause is we havent implemented the routes correctly.
// app.use(routes); 

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for feedback page
app.get('/posts', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/posts.html'))
);

// Wildcard route to direct users to a 404 page
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/pages/404.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
