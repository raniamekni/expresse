const express = require ("express");
const { dirname } = require("path");
const path = require ("path")
const hours = new Date().getHours();
const days = new Date().getDay();

const app = express()

app.get("/contact", (req, res) => {
  
  if(hours < 9 || hours >= 17 || days == 0 ||  days == 6) {

      res.sendFile(`${__dirname}/views/close.html`);
  }
  else {
      res.sendFile(`${__dirname}/views/contact.html`)
      
  }
})

app.get("/services", (req, res) => {

  if(hours < 9 || hours >= 17 || days== 0 ||  days == 6) {

      res.sendFile(`${__dirname}/views/close.html`);
  }
  else {
      res.sendFile(`${__dirname}/views/services.html`)
      
  }
})

app.get("/home", (req, res) => {

  if(hours < 9 || hours >= 17 || days== 0 ||  days == 6) {

      res.sendFile(`${__dirname}/views/close.html`);
  }
  else {
      res.sendFile(`${__dirname}/views/home.html`)
      
  }
})











app.use(express.static(`${__dirname}/views`))
app.get("/close",(req,res)=>{
  res.sendFile(`${__dirname}/views/close.html`)
})


app.get("/home",(req,res)=>{
   res.sendFile(`${__dirname}/views/home.html`)
 })



 app.use(express.static(`${__dirname}/views`))

app.get("/service",(req,res)=>{
   res.sendFile(`${__dirname}/views/service.html`)
 })

 
 app.use(express.static(`${__dirname}/views`))

app.get("/contact",(req,res)=>{
   res.sendFile(`${__dirname}/views/contact.html`)
 })








const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
        console.log(`SERVEUR STARTED ON PORT ${PORT}`)
    })