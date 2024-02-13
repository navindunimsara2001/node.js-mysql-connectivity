const express = require('express'); // import express
const app = express();

// to extract the data from the request body and add it to the request object in the form of req. body
app.use(express.urlencoded({ extended: false })); 

const server = app.listen(5000, () => {
    console.log('Serever is running on ' + server.address().port);
});
// instead of using server.address().port you can hard code port number directly