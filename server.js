const express = require('express');
const mortgageRoutes = require('./src/routes/mortgage');
const app = express();

app.use(express.static('public'));

app.use(express.json());
app.use('/api/mortgage', mortgageRoutes);

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    if (err.type === 'DatabaseError') {
      res.status(502).send('Database error! - Resource not found');
    } else {
      res.status(500).send('Something broke!');
    }
  });

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));