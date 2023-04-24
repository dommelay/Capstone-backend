const mongoose = require('mongoose')

const artworkSchema = new mongoose.Schema({
    id: Number,
    title: String,
    imageId: String,
    iiifUrl: String,
    apiLink: String,
    imageSrc: String,
    dateStart: Number,
    dateEnd: Number,
    placeOfOrigin: String,
    artworkTypeTitle: String,
    artitstTitle: String,
})

const Artworks = mongoose.model('Artworks', artworkSchema)
module.exports = Artworks