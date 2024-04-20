import express from 'express';
import cors from 'cors';
import fields from './fields.json' with {type: 'json'};
import landingData from './landingPageData.json' with {type: 'json'};

const app = express();
const port = 8000;

app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello there from send");
});

app.get('/landingpage', (req, res) => {    
    res.send(landingData);
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