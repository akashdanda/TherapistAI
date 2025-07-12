import express from 'express'
import cors from 'cors'
import 'dotenv/config';
import router from './routes/chat.js';

export const app = express();
const port = 3001;



app.use(cors())
app.use(express.json());
app.use('/api', router);


app.listen(port, () => {
  console.log(`GPT-4 backend listening on http://localhost:${port}`);
});