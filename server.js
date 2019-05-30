const express = require('express')
const app = express()

app.get('/', (req, res) => {    res.send('Nova versão by buddy! part 4')})

app.listen(3000, () => {    console.log('Server is up on 3000')})