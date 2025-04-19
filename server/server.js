const express = require('express');
const http = require('http');
const path = require('path');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
// const wss = new WebSocket.Server({ server });
// 
// const clients = new Set();
// 
// wss.on('connection', (ws) => {
//   clients.add(ws);
// 
//   ws.on('message', (message) => {
//     for (const client of clients) {
//       if (client !== ws && client.readyState === WebSocket.OPEN) {
//         client.send(message);
//       }
//     }
//   });
// 
//   ws.on('close', () => {
//     clients.delete(ws);
//   });
// });

// Serve static files from ../client/
const clientPath = path.join(__dirname, '../client');
app.use(express.static(clientPath));

// Fallback to index.html
app.get('*', (_req, res) => {
  res.sendFile(path.join(clientPath, 'index.html'));
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
