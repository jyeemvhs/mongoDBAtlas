
const mongoose = require("mongoose")
const Schema = mongoose.Schema
const dataSchema = new Schema({
    ident: {
        required: true,
        unique: true,
        type:Number
    },
    name: String,
    grade: Number
})

module.exports = mongoose.model('infos',dataSchema)  //infos names the collection.


 