const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.render('homepage.ejs');
});

// // rendering 'home page'
// app.get('/Homepage', (req, res) => {
//     res.render('homepage.ejs');
//   });

// rendering 'company history'  
app.get('/companyHistory', (req, res) => {
    res.render('company-history.ejs');
});

// rendering 'past work'
app.get('/pastWork', (req, res) => {
    res.render('past-work.ejs');
});

// rendering 'Staff'
app.get('/staff', (req, res) => {
    res.render('staff.ejs', {
        staff: STAFF.members
    });
});

//rendering Staff Show Page
app.get('/:staffId', (req,res) => {
  const index = req.params.staffId
  res.render('staffshow.ejs', {
    item: STAFF.members[index]
  })
})


// rendering Contact Us'
app.get('/contact', (req, res) => {
    res.render('contact-us.ejs');
});

// rendering 'External Links'
app.get('/externalLinks', (req, res) => {
    res.render('external-links.ejs');
});


const STAFF = {
   members : [
    {
        name: 'Bugs Bunny',
        position: 'CEO',
        salary: '1.5 million',
        tenure: '86 Years of Service'
    },
    {
        name: 'Elmer Fudd',
        position: 'CFO',
        salary: '1 million',
        tenure: '87 Years of Service'
    },
    {
        name: 'Daffy Duck',
        position: 'CTO',
        salary: '800K',
        tenure: '87 Years of Service'
    },
    {
        name: 'Tazmanian Devil (Taz)',
        position: 'Head of Security',
        salary: '80K',
        tenure: '70 Years of Service'
    }

   ]
}

const WORK = {
  episodes : [
   {
       name: 'Bugs Bunny',
       position: 'CEO',
       salary: '1.5 million',
       tenure: '86 Years of Service'
   },
   {
       name: 'Elmer Fudd',
       position: 'CFO',
       salary: '1 million',
       tenure: '87 Years of Service'
   },
   {
       name: 'Daffy Duck',
       position: 'CTO',
       salary: '800K',
       tenure: '87 Years of Service'
   },
   {
       name: 'Tazmanian Devil (Taz)',
       position: 'Head of Security',
       salary: '80K',
       tenure: '70 Years of Service'
   }

  ]
}



app.listen(3000);

