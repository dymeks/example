const mongoose = require('../config/mongoose.js');

var ExampleSchema = new mongoose.Schema({
    id:{type:Number,required:"An Id is required!"},
    name:{type:String,required:"The Name Field is Required.",minlength:[3,"The Name must be at least 3 characters."]},
    quantity:{type:Number, required:"The Quantity field is required.",min:[0,"The Quantity must be greater than or equal to 0."]},
    price:{type:Number, required:"The Price field is required.",min:[0,"The Price must be greater than or equal to 0."]}
},{timestamps:true})

const example = mongoose.model('Example',ExampleSchema);

module.exports = example;

   