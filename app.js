//NPM MODULES:

const express = require('express')
//config configuration
const config = require('config')
//mongo db
const mongoose = require('mongoose')
//routes
const routes = require('./routes/auth.routes')


//init
const app = express()

//app
app.use('/api/auth', routes)

const PORT = config.get('port') || 5000

async function  start() {
    try {
        await mongoose.connect(
            config.get('mongoURI'), {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true
            })
        app.listen(PORT, ()=>console.log(`App has been started on port ${PORT}...`))
    } catch (e) {
        console.log('server error: ', e.message)
    }
}
start()
