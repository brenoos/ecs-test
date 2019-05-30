const express = require('express')
const app = express()

app.get('/', (req, res) => {    res.send('Chama que é nois joão')})

app.listen(80, () => {    console.log('Server is up on 3000')})