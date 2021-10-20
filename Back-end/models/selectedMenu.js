const mongoose = require('mongoose')
const SelectedMenu = mongoose.Schema({
    selectedMenuName:{type:String}
},
{
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model('SelectedMenu',SelectedMenu,'SelectedMenu')