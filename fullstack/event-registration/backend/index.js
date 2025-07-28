// const express = require('express');
// const cors = require('cors');

// const app = express();
// const port = 5000;

// // Middleware (MUST be before routes)
// app.use(cors());
// app.use(express.json()); // This parses incoming JSON data

// // POST route
// app.post('/register', (req, res) => {
//   const { name, email } = req.body; // Get data from frontend

//   console.log('Received:', name, email);

//   res.json({ message: `Thanks for registering, ${name}!` });
// });

// app.listen(port, () => {
//   console.log(`Backend running at http://localhost:${port}`);
// });

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(
    'mongodb+srv://harunzy55:tdLEvmcdZn6Fx8ob@cluster0.ecknhrt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Define schema and model
const registrationSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const Registration = mongoose.model('Registration', registrationSchema);

// POST route to save data
app.post('/register', async (req, res) => {
  const { name, email } = req.body;

  try {
    const newRegistration = new Registration({ name, email });
    await newRegistration.save();

    res.json({ message: `Thanks for registering, ${name}!` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
