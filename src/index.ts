import dotenv from 'dotenv'
dotenv.config()
import path from 'path'
import createRouter from './routes'
import session from 'express-session'
import flash from 'connect-flash'
import express from 'express'
const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/assets', express.static(path.join(__dirname, 'views/assets')))
app.use(
  session({
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: process.env.NODE_ENV === 'production',
      maxAge: 1000 * 60 * 60 * 2
    }
  })
)
app.use(flash())

createRouter(app)

const port = process.env.PORT || 5555
app.listen(port, () => console.log(`Server is listenning on port ${port}...`))
