let express = require('express')
let mongoose = require('mongoose')
let Carnet = require('./models/model')

let serveur=express()
serveur.listen(3000)
let code_url='mongodb+srv://tanhaxelkevin:abidasproduction@cluster0.xe6gize.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(code_url)
.then((result)=>{
    
    console.log('bd connecté')
})
.catch((err)=>{
    console.log(err)
})


serveur.use(express.urlencoded({extended:true}))
serveur.use(express.static('public'))
serveur.set('view engine','ejs')



serveur.get('/',(req,res)=>{
let blogs=[
{
    nom:"axel",
    code:"0000"
},
{
    nom:"kevin",
    code:"0001"
}
]


res.render('acceuil',{blogs})
})


serveur.get('/inscription',(req,res)=>{
    res.render('inscription')
})



serveur.use((req,res)=>{
    res.render('404')
})



serveur.post('/form',(req,res)=>{
 let blog=new Carnet(req.body)
 blog.save()
 .then((result)=>{ 
   res.redirect('/')
 })
.catch((err)=>{
    console.log(err)
})

})
