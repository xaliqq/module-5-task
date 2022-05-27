const express = require('express');

const app = express();

const products = [
    {
        id: 1,
        name: 'Komputer',
        price: 1000,
        quantity: 12
    },
    {
        id: 2,
        name: 'Telefon',
        price: 500,
        quantity: 23
    },
    {
        id: 3,
        name: 'Kabro',
        price: 5,
        quantity: 34
    },
    {
        id: 4,
        name: 'Videokart',
        price: 600,
        quantity: 45
    },
    {
        id: 5,
        name: 'Ram',
        price: 30,
        quantity: 56
    },
    {
        id: 6,
        name: 'HDD',
        price: 100,
        quantity: 67
    },
    {
        id: 7,
        name: 'SSD',
        price: 200,
        quantity: 78
    },
    {
        id: 8,
        name: 'Kamera',
        price: 50,
        quantity: 89
    },
    {
        id: 9,
        name: 'Mikrofon',
        price: 35,
        quantity: 90
    },
    {
        id: 10,
        name: 'Monitor',
        price: 250,
        quantity: 15
    }
]

app.get('/', function (req, res) {
    res.json(products);
})

app.get('/:id', function (req, res) {
    for (let elem of products) {
        if (req.params.id == elem.id) {
            res.json(elem);
            break;
        }
    }
})

app.listen(3000);