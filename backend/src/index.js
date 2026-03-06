// server/index.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import http from 'http';
import { WebSocketServer } from 'ws';
import healthRoutes from './routes/healthRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import slideRoutes from './routes/slideRoutes.js';
import downloadRoutes from './routes/downloadRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import canvasRoutes from './routes/canvasRoutes.js';
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const server = http.createServer(app);
const wss = new WebSocketServer({ server });

// Broadcast helper
function broadcast(data) {
  const message = JSON.stringify(data);
  wss.clients.forEach(client => {
    if (client.readyState === client.OPEN) {
      client.send(message);
    }
  });
}

//debug
wss.on('connection', (ws) => {
  console.log('WebSocket client connected');
});

const PORT = process.env.PORT || 5000;


console.log('running server.js');


app.use("/api/health", healthRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/slides", slideRoutes);
app.use("/api/downloads",downloadRoutes);
app.use("/api/contact",contactRoutes);
app.use("/api/canvas", canvasRoutes(broadcast));

server.listen(parseInt(PORT, 10), () => {
  console.log('Server running at ',PORT, '/');
});