import express from 'express';
import fields from './fields.json' with {type: 'json'};

const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send("Hello there from send");
});

app.get('/entries', (req, res) => {    
    res.send(fields);
});

app.get('/entries/:id', (req, res) => {    
    const {id} = req.params;
    res.send(fields.items.filter(data => data.sys.id === id));
});

app.get('/asset', (req, res) => {    
    res.send(fields);
});

app.get('/asset/:id', (req, res) => {    
    const {id} = req.params;
    res.json(fields.includes.Asset.filter(data => data.sys.id === id));
});

app.listen(port, () => {
    console.log(`Listening to the port ${port}`);
});