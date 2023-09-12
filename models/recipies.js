const { model, Schema } = require('mongoose')

const recipieSchema = new Schema({
    name:String,
    description:String,
    createdAt:String,
    thumbsUp:Number,
    thumbsDown:Number,
})

module.exports = model('Recipie', recipieSchema)