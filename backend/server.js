import path from 'path';
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import helmet from "helmet";
import bodyParser from 'body-parser'
import compression from 'compression'
import fileUpload from 'express-fileupload'
import rateLimit, { MemoryStore } from 'express-rate-limit'
import { errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
import messages from './utils/messages.js'
import setCache from './middleware/cache-control.js';
import {
    usersRouter,
    standardRouter,
    settingsRouter,
    imagesRouter,
    esecRouter,
    documentsRouter
} from './routes/routers.js'
import currDir from './lib/currDir.js';

connectDB()

// Configure headers
const corsOptions = {
    origin: process.env.NODE_ENV === 'development'
        ? process.env.DOMAIN
        : process.env.DOMAIN_PROD,
    credentials: true
}

dotenv.config()
const app = express()
app.use(compression({ filter: shouldCompress }))

function shouldCompress(req, res) {
    if (req.headers['x-no-compression']) {
        // don't compress responses with this request header
        return false
    }

    // fallback to standard filter function
    return compression.filter(req, res)
}

const PREFIX = '/api'
const jsonEncode = { limit: '50mb', extended: true }

app.use(
    helmet.contentSecurityPolicy({
        directives: {
            "script-src": ["'self'", "cdn.jsdelivr.net"],
            "img-src": ["'self'", "res.cloudinary.com", "data:", "blob:"],
        },
    })
);
app.use(fileUpload())
app.use(cors(corsOptions))
app.use(express.json(jsonEncode))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(setCache)

const apiLimiter = rateLimit({
	windowMs: 5 * 60 * 1000,
	max: 300,
	standardHeaders: true,
	store: new MemoryStore(),
})

app.use(`${PREFIX}/`, apiLimiter)
app.use(`${PREFIX}/users`, usersRouter)
app.use(`${PREFIX}/app-settings`, settingsRouter)

// Cloudinary images
app.use(`${PREFIX}/images`, imagesRouter)

// MongoDB multi document collections
app.use(`${PREFIX}/contacts`, standardRouter)
app.use(`${PREFIX}/businesses`, standardRouter)
app.use(`${PREFIX}/customers`, standardRouter)
app.use(`${PREFIX}/invoices`, standardRouter)
app.use(`${PREFIX}/services`, standardRouter)
app.use(`${PREFIX}/admin`, standardRouter)
app.use(`${PREFIX}/email-list`, standardRouter)
app.use(`${PREFIX}/user-permissions`, standardRouter)
app.use(`${PREFIX}/user-roles`, standardRouter)

app.use(`${PREFIX}/esec`, esecRouter)

// pdf files stored in file system
app.use(`${PREFIX}/document-files`, documentsRouter)

const __dirname = currDir(import.meta.url);

if (process.env.NODE_ENV === 'development') {
    app.get('/', (req, res) => res.send(messages.root()))
} else {
    app.use(express.static(path.join(__dirname, '../frontend/build')))
    app.get('/*', (req, res) => res.sendFile(path.resolve(__dirname, "../frontend/build/index.html")))
}

app.use((req, res) => {
    res.status(404)
    res.format({
        html: () => res.type('html').send(messages.notFound()),
        json: () => res.json({ error: messages.notFoundJSON }),
        default: () => res.type('txt').send(messages.notFoundText)
    })
})

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
