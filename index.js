const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/api/users', function(req,res){
    const friends = ['cody','thomas','bree','ryan','chris'];
    res.status(200).send(friends);
});


app.get('/weather/:temperature', function(req,res){
    const {temperature} = req.params;
    const phrase = `<h3>The weather was ${temperature} today.</h3>`;
    res.status(200).send(phrase);
});


app.listen(4000, function(){console.log('Server is up on 4000')});


// const express = require('express');
// const cors = require('cors');

// const app = express();

// app.use(express.json());
// app.use(cors());

// app.get('/api/users', function(req, res){
//     const myArr = ['Cody', 'Thomas', 'Bree', 'Ryan', 'Chris', 'Lindsey'];
//     res.status(200).send(myArr);
// });

// app.get('/weather/:temp', function(req, res){
//     const {temp} = req.params;
//     const phrase = `<h3>It was ${temp} today.<h3>`;
//     res.status(200).send(phrase);
// });

// const SERVER_PORT = 4000;
// app.listen(SERVER_PORT, function(){console.log(`Server is up on ${SERVER_PORT}`)})