import express from 'express';
import cors from 'cors'
import { registerRoutes } from './routes';
export const initApp = async () => {
  const app = express()
  const port = 3000;
  app.use(cors());
  app.use(express.json());
  registerRoutes(app);
  app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.listen(port, () => {
    console.log(`Server Listening at:  http://localhost:${port}`)
  })
}