var express = require("express")
var app = express()
app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
var port = process.env.port || 3000;


const cardList = [{
    title: 'human data ',
    path: 'my data/ new database',
    link: 'About human data',
    description: 'Description of human data'
},
{
    title: 'human data2',
    path: 'my data/ new database',
    link: 'About human data3',
    description: 'Description of human data'
}];


app.get('/api/projects', (req, res) => {
    res.json({ statusCode: 200, data: cardList, message: "Success" })
});

app.listen(port, () => {
    console.log("App listening to: " + port)
});
