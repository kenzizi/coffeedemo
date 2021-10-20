const mongoose = require('mongoose')
const Menu = mongoose.Schema({
    menuName:{type:String}
},
{
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model('Menu',Menu,'Menu')