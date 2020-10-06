const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb+srv://stefano:AGzzcso1$@cluster0.fzaoe.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json())

app.post('/users', (req, res) => {
    console.log(req.body)
    return res.json({ message: 'Hello Omnistack' })
})

app.listen(3333)
