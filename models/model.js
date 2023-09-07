const { text } = require('express')
let mongoose=require('mongoose')
let Schema=mongoose.Schema
let blogSchema = new Schema({
  nom:{
    type:String,
    require:true
  },
  email:{
    type:String,
    require:true
  },
  password:{
    type:String,
    require:true
  },
  password1:{
    type:String,
    require:true
  }
},{timestamps:true})

let Carnet=mongoose.model('Carnet',blogSchema)

module.exports= Carnet;