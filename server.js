const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname + 'public', 'index.html'));
});

app.post('/submit', (req, res)=>{   
    const formData = req.body;

    let data = [];
    if (fs.existsSync('data.json')) {
        const jsonData = fs.readFileSync('data.json', 'utf8');
        if (jsonData) {
            data = JSON.parse(jsonData);
        }
    }
    

    data.push(formData);

    fs.writeFileSync('data.json',JSON.stringify(data, null, 2), 'utf8');

    res.send('Your data has been saved successfuly!');
})

app.listen(port, ()=>{
    console.log(`Server listening on http://localhost:${port}`);
});

