import dotenv from 'dotenv'
dotenv.config()
import path from 'path'
import createRouter from './routes'
import express from 'express'
const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/assets', express.static(path.join(__dirname, 'views/assets')))

createRouter(app)

const port = process.env.PORT || 5555
app.listen(port, () => console.log(`Server is listenning on port ${port}...`))
