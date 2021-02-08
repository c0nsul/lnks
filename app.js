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
//convert BODY to json!!!!!
app.use(express.json({extended: true}))

//app
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/link', require('./routes/link.routes'))
app.use('/t', require('./routes/redirect.routes'))

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

