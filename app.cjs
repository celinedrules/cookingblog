const express = require('express');
const path = require('path');
const fileUpload = require('express-fileupload');
const session = require('express-session');
const cookieParser = require('cookie-parser');
//const flash = require('connect-flash');

const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();

// Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));
app.use(cookieParser('CookingBlogSecure'));
app.use(session({
    secret: 'CookingBlockSecretSession',
    saveUninitialized: true,
    resave: true
}));
//app.use(flash());
app.use(fileUpload());

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

