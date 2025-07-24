// server.js (ES Module version)
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import profileRoutes from './routes/profileRoutes.js';
import agentRoutes from './routes/agentRoutes.js';
import chatRoutes from './routes/chatRoutes.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// ✅ Register routes
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/agent', agentRoutes);
app.use('/api/chat', chatRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
