const express = require('express')
const app = express()
const port = 4000
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const mongoDB = 'mongodb+srv://admin:admin@cluster0-epnsb.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser:true});

app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));

app.use(cors());

app.use (function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({ extended: false}))

app.use(bodyParser.json())

const Schema = mongoose.Schema;

const PlayerSchema = new Schema ({
    name: String,
    rank: String,
    brand: String
})

const playerModel = mongoose.model('ball', PlayerSchema);
const proPlayerModel = mongoose.model('pro', PlayerSchema);

app.get('/whatever', (req, res) =>{
    res.send('whatever')
})

app.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})


app.get('api/players', (req, res)=>{

    playerModel.find((error, data) =>{
        res.json({players:data});
    })
})

app.get('/api/players:id', (req, res) =>{
    console.log(req.params.id);

    playerModel.findById(req.params.id, (error, data) =>{
        res.json(data);
    })
})

app.delete('/api/players/:id', (req, res) =>{
    console.log(req.params.id);

    playerModel.deleteOne({__id: req.params.id},
        (error, data) =>{
            res.json(data);
        })
})

app.put('/api/players/:id',(req,res)=>{
    console.log("Edit: "+req.params.id);
    console.log(req.body);
    
    playerModel.findByIdAndUpdate(req.params.id,
        req.body,
        {new:true},
        (error,data)=>{
            res.json(data);
        })
})

app.get('/api/players/:id', (req,res)=>{
    console.log("GET: "+req.params.id);

    playerModel.findById(req.params.id,(error, data)=>{
        res.json(data);
    })
})

app.post('/api/players', (req,res)=>{
    console.log('Post request Successful');
    console.log(req.body.name);
    console.log(req.body.rank);
    console.log(req.body.brand);

    playerModel.create({
        name:req.body.name, 
        rank:req.body.rank, 
        brand:req.body.brand
    });
    res.json('post recieved!');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
