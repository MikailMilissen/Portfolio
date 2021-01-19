// Home, Contact, About, Projects

const homePageController = (req,res) =>{
    res.send('This is my homepage')
}

const contactPageController = (req,res) =>{
    res.send('This is my contact page')
}

const aboutPageController = (req,res) =>{
    res.send('This is my about page')
}

const projectsPageController = (req,res) =>{
    res.send('This is my projects page')
}

module.exports = {homePageController,contactPageController,aboutPageController,projectsPageController}