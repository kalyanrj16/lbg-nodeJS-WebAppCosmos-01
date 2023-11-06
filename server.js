require('dotenv').config();
const express = require('express');
const mortgageRoutes = require('./src/routes/mortgage');
const databaseRoutes = require('./src/routes/databases');
const app = express();

app.use(express.static('public'));

app.use(express.json());

app.use('/api/databases', databaseRoutes);
app.use('/api/mortgage', mortgageRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  if (err.type === 'DatabaseError') {
    res.status(502).send('Database error! - Resource not found');
  } else if (err.type === 'ValidationError') {
    res.status(400).send('Validation error! - Bad request');
  } else {
    res.status(500).send('Something broke!');
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));