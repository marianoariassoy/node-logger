import express from 'express'
import { addLogger } from './src/utils/logger.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.use(addLogger)

app.get('/loggerTest', (req, res) => {
  req.logger.debug('debug')
  req.logger.http('http')
  req.logger.warning('warning')
  req.logger.error('error')
  res.send('Logger test')
})

app.listen(8080, () => {
  console.log('Listening on port http://localhost:8080')
})
