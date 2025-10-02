const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { connectDB } = require('./db');
const remedyRoutes = require('./routes/remedies');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/remedies', remedyRoutes);

const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
