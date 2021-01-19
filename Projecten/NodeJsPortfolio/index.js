
const express = require('express')
const app = express()
const {homePageController,contactPageController,aboutPageController,projectsPageController} = require('./controller/index.js')


app.listen(3000,()=>{
    console.log('Server is running')
})

function loginCheck(req,res,next){
    let isLogged = false;
    if(!isLogged){ // which means its true
        console.log('Middleware is running')
    }
}

app.get('/', homePageController)

app.get('/about',aboutPageController)

app.get('/contact', contactPageController)

app.get('/projects',projectsPageController)