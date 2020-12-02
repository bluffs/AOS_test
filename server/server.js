const express = require('express')
const mongoose = require('mongoose')

const Auth = require('./dbModel.js');

const connection_url = 'mongodb+srv://admin:S25HYXDwmFDOPLG7@cluster0.dqfbp.mongodb.net/aosTest?retryWrites=true&w=majority';

// app config
const app = express();
const port = 9000;

// middlewares
app.use(express.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'),
    res.setHeader('Access-Control-Allow-Headers', '*'),
    next();
})

// DB config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

// api endpoints
app.get('/', (req, res) =>
    res.status(200).send('Hello world')
);

app.post('/v2/posts', (req, res) => {
    const body = res.connection.parser.incoming.body;
    Auth.find((err, data) => {
        if (err) {
            console.log(err);
            res.send(500).send(err);
        } else {
            if (data[0].email === body['email'] &&
                data[0].password === body['password'])
                {
                    // send success
                    res.status(200).send(data);
                    console.log("success");
                } else {
                    // send bad auth
                    res.status(401).send("unauthorized");
                    console.log("unauthorized");
                }
        }
    })
})

// listener
app.listen(port, () => console.log(`listening on localhost:${port}`));