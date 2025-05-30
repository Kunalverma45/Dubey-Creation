// backend/index.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(process.env.PORT || 5000, () => {
  console.log('Server running on port 5000'); // Server running at 5000
});
