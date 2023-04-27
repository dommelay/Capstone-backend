const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
app.use(cors())
app.use(express.json())
const Artworks = require('./models/artwork.js')
const MyArtworks = require('./models/myartwork.js')

app.get('/artworks', (req, res) => {
    Artworks.find({}).then((foundArtworks) => {
        res.json(foundArtworks)
    })
})
app.get('/my-artworks', (req, res) => {
    MyArtworks.find({}).then((foundArtworks) => {
        res.json(foundArtworks)
    })
})

app.post('/my-artworks', (req, res) => {
    MyArtworks.create(req.body).then((favoriteArtwork) => {
        res.json(favoriteArtwork)
    })
})

app.put('/my-artworks/:id', (req, res) => {
    MyArtworks.findByIdAndUpdate(req.params.id, req.body, {new: true}).then((updatedArtwork) => {
        res.json(updatedArtwork)
    })
})

app.delete('/my-artworks/:id', (req, res) => {
    MyArtworks.findByIdAndRemove(req.params.id).then((deletedArtwork) => {
        res.json(deletedArtwork)
    })
})

mongoose.connect('mongodb://localhost:27017/gallerycrud')
mongoose.connection.once('open', () => {
    console.log('connected to mongod...')
})

app.listen(3000, () => {
    console.log('listening...')
})











