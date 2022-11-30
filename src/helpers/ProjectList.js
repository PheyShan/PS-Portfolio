import Proj1 from "../assets/proj1.jpg";
import Proj2 from "../assets/proj2.jpg";
import Proj3 from "../assets/proj3.jpg";
import Proj4 from "../assets/proj4.jpg";

export const ProjectList = [
    {
        name: "MovieDB App",
        image: Proj1,
        alt:"MovieDB App Image",
        description: "The movie website is designed using ReactJS Hooks with the use of React Bootstrap/Boostrap and CSS styling. It also demonstrates on how the data being fetched from the open source API through search function and how the favourite movies being saved to local storage and retrieved. Filtering method was used to remove the movies from favorites.",
        skills: "ReactJS-Hooks, CSS, React Bootstrap/Bootstrap",
        link: "https://moviedb-app-react.netlify.app/"
    },
    {
        name: "Quiz App",
        image: Proj2,
        alt:"Quiz App Image",
        description: "The quiz website is designed using ReactJS Hooks with the use of CSS styling. It also demonstrates on how the questionaires being fetched from the open source API via Axios method.",
        skills: "ReactJS-Hooks, CSS",
        link: "https://react-quizapp88.netlify.app/"
        
    },
    {
        name: "Responsive Website",
        image: Proj3,
        alt:"Responsive Website Image",
        description: "The website is designed using mobile first approach mainly with the use of bootstrap and CSS styling. It also demonstrates on how the variable.css being utilised in Features & Recent Blog Posts sections. The entire screen is limited up to width 1600px.",
        skills: "HTML, CSS, JS, Bootstrap, Boxicons, Remixicon, Animate.css",
        link: "https://responsive-website-budgetunicorn.netlify.app/"
    },
    {
        name: "ToDo List",
        image: Proj4,
        alt:"ToDo List Image",
        description: "This simple ToDo web application is developed using Spring Initializr which generates the structure of Spring Boot project, Spring MVC, Spring Data JPA, and Thymeleaf packages. The web application consists of a simple menu that navigates to 2 pages (ToDo List and ToDo Form). ToDo List displays all the ToDo lists retrieved from MySQL database (Read/Retrieve feature) while ToDo Form allows the users to add their ToDo items into ToDo List (Create feature).",
        skills: "Java, Spring Boot, Bootstrap, MySQL",
        link: "https://youtu.be/FbYOYzCQxFE"
    }
];