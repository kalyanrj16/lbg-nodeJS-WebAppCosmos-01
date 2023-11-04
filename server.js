const express = require('express');
const mortgageRoutes = require('./src/routes/mortgage');
const app = express();

app.use(express.static('public'));

app.use(express.json());
app.use('/api/mortgage', mortgageRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));