// const fs = require('fs')

// fs.readFile('txt.txt', 'utf8', (err,data) =>{
//     if(err){
//         console.error("Gabim gjate leximit te file", err);
//         return;
//     }
//     console.log("permbajta e qati file eshte :");
//     console.log(data);
// })

var express = require('express');

const app = express();

const port = 2008;
 app.get('/' , (req , res) => {
 res.send("Hello nga Ylliiiiiii")
 } );

 app.get('/about' , (req , res) => {
res.send("kjo eshte nje faqe rreth meje :)")
 } );

 app.listen(port, () =>{
    console.log(`serveri eshte i gatshem dhe po degjon ne portin ${2008}`)
 })
