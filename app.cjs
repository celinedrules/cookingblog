const express = require('express');
const path = require('path');
const fileUpload = require('express-fileupload');
const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));
app.use(fileUpload({}));

const routes = require('./server/routes/recipeRoutes.cjs');
app.use('/', routes);
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => console.log(`Server running on port ${port}`));