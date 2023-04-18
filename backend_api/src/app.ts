import './common/env'
import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'
import router from './common/routes'

const app: Application = express()

app.disable('x-powered-by')
app.use(cors())
app.use(helmet())
app.use(compression())
app.use(
  express.urlencoded({
    extended: true,
    limit: process.env.REQUEST_LIMIT || '100kb'
  })
)

// Start server
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.json({
    'health-check': 'OK: top level api working',
  })
})

app.use('/api', router);

export default app;