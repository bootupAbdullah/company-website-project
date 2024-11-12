const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello There!');
});

// rendering 'home page'
app.get('/Homepage', (req, res) => {
    res.render('homepage.ejs');
  });

// rendering 'company history'  
app.get('/companyHistory', (req, res) => {
    res.render('company-history.ejs');
});




app.listen(3000);

