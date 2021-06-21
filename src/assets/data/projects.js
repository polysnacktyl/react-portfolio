import mongo from '../icons/mongothicc.svg';
import reactsvg from '../icons/react.svg';
import expressnew from '../icons/expressnew.svg'
import htmlnew from '../icons/htmlnew.svg';
import css from '../icons/cssnew.svg';
import javascript from '../icons/javascript.svg';
import nodejs from '../icons/nodejs.svg';
import bootstrap from '../icons/bootsvg.svg';
import handlebars from '../icons/handlebars.svg';
import SQL from '../icons/sqlsvg.svg';
import heroku from '../icons/heroku.svg';
// import linkedin from '../icons/linkedin.svg';
// import email from '../icons/email.svg';
// import tester from '../icons/tester.svg';
// import github from '../icons/github.svg';
// import illustrator from '../icons/illustrator.svg';

const ProjectsData = [
    {
        "id": 1,
        "title": "Neighborly",
        "image": "https://raw.githubusercontent.com/polysnacktyl/react-portfolio/main/src/assets/images/expanded-views/neighborly-1-landing.png",
        "alt": "screenshot",
        "url":
            [
                { "title": "launch the app", "link": "https://infinite-forest-58133.herokuapp.com/" },
                { "title": "see the code", "link": "https://github.com/polysnacktyl/project3/tree/amanda" }
            ],
        "summaryTitle": "Project",
        "summary":
            [

                { "paragraph": "A community hub to facilitate communication and engagement for a mutual aid organization in my city. Because the work is, of course, unpaid and plentiful, the organization tends to cycle through leadership due to burnout. The aim of Neighborly is to help share the work by making organization more visible and accessible to a broader audience, hopefully increasing and sustaining engagement from community members." },
                { "paragraph": "This project's basic design means it can be implemented for use in other communities and tailored to specific organizatioal needs fairly easily." },
            ],
        "challengesTitle": "Challenges",
        "challenges":
            [
                { "paragraph": "My major challenge on this project was front end/back end disconnect. Auth0 returns a JSON object to the site’s front end when the user logs in and is directed back to Neighborly. Attempts to ferry that object from the front end to the back end initially failed to save to the database or even console log while also throwing no errors." },
                { "paragraph": "After much frustration and many attempted work arounds, I consulted with a much more experienced software developer who informed me that the req.body property we needed could be obtained by a POST route rather than the GET route had been trying to implement." }
            ],
        "icons":
            [
                { "title": "react", "icon": reactsvg },
                { "title": 'javascript', "icon": javascript },
                { "title": 'nodeJS', "icon": nodejs },
                { "title": "mongoDB", "icon": mongo },
                { "title": "express", "icon": expressnew },
                { "title": "html", "icon": htmlnew },
                { "title": 'css', "icon": css },
                { "title": 'bootstrap', "icon": bootstrap },
                { "title": 'heroku', "icon": heroku }
            ]
    },
    {
        "id": 2,
        "alt": "screenshot",
        "title": "fungID",
        "image": "https://raw.githubusercontent.com/polysnacktyl/react-portfolio/main/src/assets/images/expanded-views/fungID-1-landing.png",
        "url":
            [
                { "title": "launch the app", "link": "https://fung-i-d-ployed.herokuapp.com/mush-room" },
                { "title": "see the code", "link": "https://github.com/polysnacktyl/fung-id-1" }
            ],
        "summaryTitle": "Project",
        "summary":
            [
                { "paragraph": "This concept came out of my own newly-discovered love of fungus foraging and mycology in general. I recently moved to Pittsburgh from Southern California where drought conditions and ever more severe wildfire seasons had prevented me from engaging in outdoor activities. Western Pennsylvania, on the other hand, has very inviting green spaces to explore and photograph. Not knowing the area too well, I conceived of this application to help me organize my photos, notes, and GPS locations so I won’t forget where to look for Morels again next season." },
                { "paragraph": "While it would make more sense as a native phone application, I frankly haven’t learned to make those yet, so my plans for fungID revolve more around completing and polishing the functionality I envisioned but could not manifest in the minute time frame, even with my spectacular team-mates, Peter MoDavis and Matthew Ward. After that I’ll be tweaking it into a progressive web app that at least a few people I’ve told are already excited to use themselves. Stay tuned for its appearance here." },

            ],
        "challengesTitle": "Challenges",
        "challenges":
            [
                { "paragraph": "My main role on this project was implementation of image functionality through Cloudinary. I was warned that Cloudinary is a challenge to get working, but the heart of this application relies on a functional image gallery, so I decided to tackle it. As a tremendously popular service that works with many browsers, languages, and purposes, Cloudinary has a prolific collection of documentation." },
                { "paragraph": "Digging through the overwhelming number of use cases and options was an invaluable exercise in composing search phrases that actually lead to pertinent information for solving coding problems." }
            ],
        "icons":
            [
                { "title": "javascript", "icon": javascript },
                { "title": 'SQL', "icon": SQL },
                { "title": 'heroku', "icon": heroku },
                { "title": "express", "icon": expressnew },
                { "title": "html", "icon": htmlnew },
                { "title": "css", "icon": css },
                { "title": "handlebars", "icon": handlebars }, 
            ]
    },
    {
        "id": 3,
        "title": "HTML Generator",
        "image": "https://raw.githubusercontent.com/polysnacktyl/react-portfolio/main/src/assets/images/profileGen.png",
        "alt": "screenshot",
        "url":
            [
                { "title": "see the code", "link": "https://github.com/polysnacktyl/team-profile-generator" }
            ],
        "summaryTitle": "Project",
        "summary":
            [
                { "paragraph": "This is a command line interface application that employs the popular Inquire package to collect information from a user, plug it into an HTML template, and create a .html file ready to view in the browser and add to any project. In this case, the file produced is a collection of mini profiles for hypothetical employee information including website and email links that open in new windows." }
            ],
        "challengesTitle": "Challenges",
        "challenges":
            [
                { "paragraph": "This project happened rather early on in my boot camp program when I was still struggling most with front end matters, so my main challenge here was nailing the div structure and understanding how flex properties relate to each other. Additionally, the project required MVC design and testing, the latter of which I still am working toward fully understanding." }
            ],

        "icons":
            [
                { "title": "html", "icon": htmlnew },
                { "title": 'css', "icon": css },
                { "title": 'javascript', "icon": javascript },
                { "title": 'nodejs', "icon": nodejs },
                { "title": 'bootstrap', "icon": bootstrap }
            ],
    },
    {
        "id": 4,
        "title": "Password Generator",
        "image": "https://raw.githubusercontent.com/polysnacktyl/react-portfolio/main/src/assets/images/expanded-views/passwordGen-1-landing.png",
        "alt": "screenshot",
        "url":
            [
                { "title": "launch the app", "link": "https://polysnacktyl.github.io/js-password-generator/" },
                { "title": "see the code", "link": "https://github.com/polysnacktyl/js-password-generator" }
            ],
        "summaryTitle": "Project",
        "summary":
            [
                { "paragraph": "This application generates a randomized string of characters based on input from a user through Chrome's confirmation pop-up. This pre-dates my understanding of the miracle of buttons, among many other skills, and I'd like to polish up a version of the project with a more pleasant front end experience." }
            ],
        "challengesTitle": "Challenges",
        "challenges":
            [
                { "paragraph": "My main and most time-consuming struggle in this project was the randomization step. I was able to implement it quite easily, as the function is common and simple to copy and paste into a script. I fell down a bit of a rabbit hole finding an adequate explanation of how and why math.random does what it does, but I feel that was time pretty well spent. Other than that, getting the functions to fire in the proper order was a challenge." },
                { "paragraph": "I also wanted a copy function for the password once it was generated, but had to table the idea due to a short time budget. Releasing perfectionist tendencies was a skill I did not know I actually needed until starting coding boot camp, but it's one I now value and continue strengthening outside the program." }
            ],
        "icons":
            [
                { "title": "html", "icon": htmlnew },
                { "title": 'css', "icon": css },
                { "title": 'javascript', "icon": javascript },
                { "title": 'nodejs', "icon": nodejs },
                { "title": 'bootstrap', "icon": bootstrap }
            ],
    },
    {
        "id": 5,
        "title": "babysittr",
        "image": "https://raw.githubusercontent.com/polysnacktyl/react-portfolio/main/src/assets/images/babysittr.png",
        "alt": "screenshot",
        "url":
            [
                { "title": "launch the app", "link": "https://polysnacktyl.github.io/project-1/" },
                { "title": "see the code", "link": "https://github.com/polysnacktyl/project-1/tree/amanda" }
            ],
        "summaryTitle": "Project",
        "summary":
            [
                { "paragraph": "The concept for this app was the brainchild of a teammate with an actual child. He said he'd searched in vain for an app that would allow his child's various sitters to quickly make a record of naps, meals, and baby's other essential daily goings-on. We produced an hourly schedule with a collection of drag-and-drop common activities, daily weather as well as location and weather-based activity suggestions." }
            ],
        "challengesTitle": "Challenges",
        "challenges":
            [
                { "paragraph": "As the first project of my boot camp program, every aspect of this not-all-that-impressive application was a major challenge. Most notably, writing vanilla JavaScript functions around data from an external source (in an un-ideal structure) was my greatest technical challenge." },
                { "paragraph": "The largest creative challenge, that I think we pulled off quite nicely, was adjusting our ideal vision for the application to the limited coding skills we had at that point." }
            ],
        "icons":
            [
                { "title": "html", "icon": htmlnew },
                { "title": 'css', "icon": css },
                { "title": 'javascript', "icon": javascript },
                { "title": 'nodejs', "icon": nodejs },
            ],
    }
]
export default ProjectsData;