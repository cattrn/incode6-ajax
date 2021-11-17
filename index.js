require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const homeRouter = require('./routes/home')
// const moviesRouter = require('./routes/movies')

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(morgan('dev'))
app.use(express.static('public'))
app.set('view engine', 'ejs')

// Routes
// app.use('/movies', moviesRouter)
app.use('/', homeRouter)


app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`))