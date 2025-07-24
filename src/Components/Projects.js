import Project from "./Project";
import employeeEntryFormImg from "../Media/employeeEntryForm.png";
import spotifyQuizImg from "../Media/spotifyQuiz.png";
import booksNextDoorImg from "../Media/booksNextDoor.png";
import rewardReadyImg from "../Media/rewardReady.png";
import fidoAndStudentAdventuresImg from "../Media/dog.svg";
import rockPaperScissorsImg from "../Media/rockPaperScissors.jpg";
import dontBreakMyHeartsImg from "../Media/dontBreakMyHearts.jpg";
import growLittleTreeImg from "../Media/growLittleTree.jpg";
import CesiumJSImg from "../Media/cesiumJSProject.png";
import "../CSS/Projects.css";

const Projects = () => {

  const myProjects = [
    {
      url: "https://eclectic-duckanoo-cef22d.netlify.app/",
      projectTitle: "Employee Entry Form",
      img: employeeEntryFormImg,
      imgAlt: "A form for employee tax information.",
      description: "An employee tax information form.",
      technologies: [ "React", "Redux.js", "JavaScript", "Bootstrap" ],
    },
    {
      url: "https://github.com/jckubik/spotifyQuizFrontend",
      projectTitle: "Spotify Quiz",
      img: spotifyQuizImg,
      imgAlt: "A multiple choice quiz of a Spotify playlist.",
      description: "A multiple choice quiz of a Spotify playlist.",
      technologies: [ "React", "Spotify Web API", "JavaScript", "Serverless Functions" ],
    },
    {
      url: "https://github.com/jckubik/booksNextDoor",
      projectTitle: "Books Next Door",
      img: booksNextDoorImg,
      imgAlt: "An ecommerce web application for a bookstore.",
      description: "An ecommerce web application for a bookstore.",
      technologies: [ "Vue.js", "TypeScript", "Java", "RESTful API" ],
    },
    {
      url: "https://github.com/jckubik/rewardReady",
      projectTitle: "RewardReady",
      img: rewardReadyImg,
      imgAlt: "A web application designed to save you money.",
      description: "A web application designed to help you find rewards.",
      technologies: [ "React", "Redux.js", "Node.js", "JavaScript", "Bootstrap", "MySQL" ],
    },
    {
      url: "https://github.com/jckubik/fidoAndStudentAdventures",
      projectTitle: "Fido&Student Adventures",
      img: fidoAndStudentAdventuresImg,
      imgAlt: "A game with cards as pieces",
      description: "A web app for students in Blacksburg, VA to find adventures to take their dog.",
      technologies: [ "JavaScript", "Django", "Python", "Heroku", "Azure Cognitive Services API" ],
    },
    {
      url: "https://gifted-mestorf-e6590e.netlify.app/",
      projectTitle: "Rock Paper Scissors",
      img: rockPaperScissorsImg,
      imgAlt: "the rock paper sciessors game menu",
      description: "Can you beat the computer in a game of rock, paper, scissors?",
      technologies: [ "JavaScript", "HTML", "CSS" ],
    },
    {
      url: "https://scratch.mit.edu/projects/454232525",
      projectTitle: "Don't Break My Hearts",
      img: dontBreakMyHeartsImg,
      imgAlt: "A game with cards as pieces",
      description: "A paddle based defender game. Keep your hearts safe from the cards.",
      technologies: [ "Scratch" ],
    },
    {
      url: "https://peaceful-euclid-47252a.netlify.app/",
      projectTitle: "Grow Little Tree",
      img: growLittleTreeImg,
      imgAlt: "A tree",
      description: "A simple tree growing simulator.",
      technologies: [ "JavaScript", "HTML", "CSS" ],
    },
    {
      url: "https://cranky-sinoussi-3a40fe.netlify.app/",
      projectTitle: "Flight Simulator",
      img: CesiumJSImg,
      imgAlt: "Airplane flying through the sky",
      description: "A 3D geospatial flight simulation using CesiumJS.",
      technologies: [ "JavaScript", "HTML", "CSS", "CesiumJS" ],
    },
  ]

  return (
    <section id="projects" className="my-3">
      <h2>Projects</h2>

      <div class="wrapper" id="projectsWrapper">

        {
          myProjects.map(({ url, projectTitle, img, imgAlt, description, technologies }) => {
            return (
              <Project 
                url={url}
                projectTitle={projectTitle}
                img={img}
                imgAlt={imgAlt}
                description={description}
                technologies={technologies}
              />
            )
          })
        }
      </div>
    </section>
  )
};

export default Projects;