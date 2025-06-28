import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(cors());


// ✅ Serve API routes
app.get('/api/data', (req, res) => {
  res.sendFile(path.join(__dirname, 'Functional.json'));
});

app.get('/api/Criticalcomponents', (req, res) => {
  res.sendFile(path.join(__dirname, 'FunctionalCritical.json'));
});

app.get('/api/finalparameters', (req, res) => {
  res.sendFile(path.join(__dirname, 'Functionalparameter.json'));
});

app.get('/api/Calibration', (req, res) => {
  res.sendFile(path.join(__dirname, 'Calibration.json'));
});

app.get('/api/NICTestJig', (req, res) => {
  res.sendFile(path.join(__dirname, 'NICTestJig.json'));  
});

app.get('/api/AccuracyTest', (req, res) => {
  res.sendFile(path.join(__dirname, 'AccuracyTest.json'));
});

app.get('/api/FinalTest', (req, res) => {
  res.sendFile(path.join(__dirname, 'FinalTest.json'));
});

// ✅ Serve static files

app.get('/', (req, res) => {
  res.send('Hello, World! SQL Server is running...');
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
