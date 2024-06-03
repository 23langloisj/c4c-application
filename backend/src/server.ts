import express, { Express } from 'express';
import routes from './routes';
import cors from 'cors';


const app: Express = express();
const port = 4000;


/* 
  APPLICATION MIDDLEWARE
*/
// necessary to avoid CORS errors - ugh
app.use(cors());
app.options('*', cors());

// Parse request bodies as JSON
app.use(express.json());

// Mount routes
app.use('/', routes);

// Enable CORS for the frontend so it can call the backend
app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
  next();
})

// Start the backend
app.listen(port, () => {
  console.log(`Express server starting on port ${port}!`);
})