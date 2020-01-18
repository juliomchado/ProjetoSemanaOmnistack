const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const routes = require('./rountes')
const http = require('http');
const { setupWebsocket } = require('./websocket')


const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://julio:julio123@cluster0-nku5l.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors())
app.use(express.json());
app.use(routes);

server.listen(3333); //  Qual o nome da rota




