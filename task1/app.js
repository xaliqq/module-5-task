const express = require('express');

const app = express();

const employees = [
    {
        id: 1,
        name: 'Xaliq',
        age: 20
    },
    {
        id: 2,
        name: 'Emin',
        age: 24
    },
    {
        id: 3,
        name: 'Revan',
        age: 15
    }
]

app.get('/', function (req, res) {
    res.json(employees);
})

app.listen(3000);