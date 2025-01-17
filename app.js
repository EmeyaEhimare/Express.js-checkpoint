import express from 'express'
import route from './routes/pagesRouters.js'
const app = express()
import dotenv from 'dotenv'
import {restrictAccessbyTime,restrictByweekdays} from './middleware/pageMiddleware.js'

dotenv.config()

const PORT = process.env.PORT

app.use('/', route)
app.use('/contact.html', route)
app.use('/servcies.html', route)
app.use(restrictAccessbyTime)
app.use(restrictByweekdays)


app.listen(PORT, () => {
    console.log(`running on port ${PORT}`)
})


