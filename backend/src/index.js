// server/index.js
import express from 'express';
import dotenv from 'dotenv';
import healthRoutes from './routes/healthRoutes.js';
import projectRoutes from './routes/projectRoutes.js';

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;


console.log('running server.js');


app.use("/api/health", healthRoutes);
app.use("/api/projects", projectRoutes);

app.listen(parseInt(PORT, 10), () => {
  console.log('Server running at http://localhost:',PORT, '/');
});