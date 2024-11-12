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

// rendering Contact Us'
app.get('/contact', (req, res) => {
    res.render('contact-us.ejs');
});

// rendering 'External Links'
app.get('/externalLinks', (req, res) => {
    res.render('external-links.ejs', {
      pages: LINKS.members
    });
});

//rendering Staff Show Page -- why does this break anything below it?
app.get('/:staffId', (req,res) => {
  const banana = req.params.staffId
  res.render('staffshow.ejs', {
    item: STAFF.members[banana]
  });
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

const LINKS = {
  members : [
    {
        references: 'Bugs Bunny',
        
    },
    {
        references: 'Elmer Fudd',
        
    },
    {
        references: 'Daffy Duck',
        
    },
    {
        references: 'Tazmanian Devil (Taz)',
        
    }

    ]
  }



app.listen(3000);

