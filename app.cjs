// const express = require("express")
// const app = express()
// const port = process.env.PORT || 3000
//
// require("dotenv").config()
//
// app.use(express.urlencoded({extended: true}))
// app.use(express.static("public"))
//
// const routes = require("./server/routes/recipeRoutes.cjs")
// app.use("/", routes)
//
// app.listen(port,() => console.log(`Listening to port ${port}`))

const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// API routes should be defined before serving the React app
const routes = require('./server/routes/recipeRoutes.cjs');
app.use('/', routes);  // This will handle the /api route

// Serve static files from the React app's build directory
app.use(express.static(path.join(__dirname, 'dist')));

// Serve the React app for all other routes that are not API routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
app.listen(port, () => console.log(`Server running on port ${port}`));

