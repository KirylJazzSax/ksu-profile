const express = require ('express');
const fallback = require ('express-history-api-fallback');
const fileUpload = require ('express-fileupload');

const app = express ();

app.use (express.json ());
app.use ('/', express.static ('dist'));
app.use ('/api', require('./routes/api'));
app.use (fileUpload())
app.use (fallback ('index.html', { root: 'dist' }));

app.listen (8080, () => {
    console.log ('should work');
})
