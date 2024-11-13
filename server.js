const express = require('express');
const app = express();

// ====================================================================== obejects

// creating objects for 'staff' page
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
 

 // creating objects for 'exteral links' page
 const externalLINKS = {
   members : [
     {
         references: 'Bugs Bunny',
         link: "bugs"
     },
     {
         references: 'Elmer Fudd',
         link: "elmer"
     },
     {
         references: 'Daffy Duck',
         link: "daffy"
     },
     {
         references: 'Tazmanian Devil (Taz)',
         link: "taz"
     }
     ]
   }
 
 // creating objects for 'past works' page
 const pastWorks = {
     seasons: [
         {
             title: "season 1",
             numberOfEpisodes: "31",
             year: "2019-2021",
             summary: "The season features classic Looney Tunes characters in fresh scenarios. Daffy Duck navigates modern challenges while Road Runner and Wile E. Coyote engage in their iconic chases. New episodes explore dynamics between Bugs Bunny, Marvin the Martian, and other characters, blending traditional slapstick with contemporary humor.",
             link: "https://looneytunes.fandom.com/wiki/Looney_Tunes_Cartoons#Season_1"
         },
 
         {
             title: "season 2",
             numberOfEpisodes: "10",
             year: "2021",
             summary: "In season two, the Looney Tunes return with more hijinks. Bugs Bunny faces off against adversaries like Marvin the Martian in inventive plots, while Daffy Duck, Porky Pig, and others find themselves in quirky situations that test their wits and patience. The season mixes nostalgic elements with modern twists, ensuring laughs for all ages.",
             link: "https://looneytunes.fandom.com/wiki/Looney_Tunes_Cartoons#Season_2"
         },
 
         {
             title: "season 3",
             numberOfEpisodes: "8",
             year: "2021",
             summary: "Season three of Looney Tunes showcases the characters in ever-more creative scenarios. Bugs Bunny, Daffy Duck, and the gang encounter new challenges and adversaries, bringing their classic humor to fresh adventures. Each episode combines slapstick, wit, and a touch of chaos, ensuring that the timeless appeal of Looney Tunes continues to thrive.",
             link: "https://looneytunes.fandom.com/wiki/Looney_Tunes_Cartoons#Season_3"
         },
 
         {
             title: "season 4",
             numberOfEpisodes: "9",
             year: "2022",
             summary: "Season four of Looney Tunes delivers a blend of nostalgia and new mischief as iconic characters like Bugs Bunny and Daffy Duck navigate a series of whimsical predicaments. This season introduces imaginative storylines, engaging the audience with clever humor and the characters' trademark antics, affirming the series' enduring charm.",
             link: "https://looneytunes.fandom.com/wiki/Looney_Tunes_Cartoons#Season_4"
         }
     ]
    }
 
// ====================================================================== routes

//root route 'homepage'
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

// rendering 'past works'
app.get('/pastWorks', (req, res) => {
    res.render('past-works.ejs', {
        renderPastWorks: pastWorks.seasons
    });
});


// rendering 'past-work-show' page
app.get('/pastWorks/:pastWorksId', (req, res) => {
    const index = req.params.pastWorksId
    res.render('past-works-show.ejs', {
       item: pastWorks.seasons[index]
    });
});


// rendering 'Staff'
app.get('/staff', (req, res) => {
    res.render('staff.ejs', {
        staff: STAFF.members
    });
});


//rendering Staff Show Page -- why does this break anything below it? <-- dynamic Id conflict, can be solved by adding additonal page ref in 'get' address
app.get('/staff/:staffId', (req,res) => {
    const index = req.params.staffId
    res.render('staffshow.ejs', {
      item: STAFF.members[index]
    });
  });


// rendering Contact Us'
app.get('/contact', (req, res) => {
    res.render('contact-us.ejs');
});

// rendering 'External Links'
app.get('/externalLinks', (req, res) => {
    res.render('external-links.ejs', {
      pages: externalLINKS.members
    });
});

//redendering logic for 'external links' selection - redirection to 'wiki page'
app.get('/externalLinks/:externalLinkId', (req, res) => {
    const capturedLink = req.params.externalLinkId
    if(capturedLink === "bugs") {
    res.redirect('https://looneytunes.fandom.com/wiki/Bugs_Bunny')
    } else if (capturedLink === "elmer") {
        res.redirect('https://looneytunes.fandom.com/wiki/Elmer_Fudd')
    } else if (capturedLink === 'daffy') {
        res.redirect('https://looneytunes.fandom.com/wiki/Daffy_Duck')
    } else if (capturedLink === 'taz') {
        res.redirect('https://looneytunes.fandom.com/wiki/Tasmanian_Devil')
    }
});







app.listen(3000);

