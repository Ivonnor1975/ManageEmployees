
//import express at the top of the file
const express = require('express');
//import database
const db = require('./db/connection');
// Add near the top of the file
const apiRoutes = require('./routes/apiRoutes');

//Add the PORT designation and the app expression
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//use apiRoutes
app.use('/api', apiRoutes);


// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

// Start server after DB connection
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
