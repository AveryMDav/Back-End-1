const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());


app.get('/api/users', function(req, res){
    const myArr = ['Cody', 'Thomas', 'Bree', 'Ryan', 'Chris', 'Lindsey'];
    res.status(200).send(myArr);
});

app.get('/weather/:temperature', function(req, res){
    const {temperature} = reqs.params;
    const phrase = `<h3>It was ${temperature} today.<h3>`;
    res.status(200).send(phrase);
});

const SERVER_PORT = 4000;
app.listen(SERVER_PORT, function(){console.log(`Server is up on ${SERVER_PORT}`)})