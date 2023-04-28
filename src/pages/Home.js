import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHub from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Home.css";
function Home(){
    return(
        <div className="home"> 
        <div className="about">
            <h2>Hi, My Name is Yousra Azmath</h2>
            <div className="prompt"><p>A  Full Stack  Java Developer with a passion for learning and create </p>
            <LinkedInIcon />
            <GitHub />
            <EmailIcon />
             </div>
        </div>

        <div className="skills">
            <h1>Skills</h1>
            <ol className="list">
                <li className="item">
                    <h2>Front-End</h2>
                    <span>
                    HTML5,CSS3,JavaScript
                    </span>
                </li>
                <li className="item">
                    <h2>Back-End</h2>
                    <span>
                        Core Java,J2EE,Servlets,JSP
                    </span>
                </li>
                <li className="item">
                    <h2>Frameworks</h2>
                    <span>
                    ReactJs,SpringFramework,SpringCore,Spring MVC,SpringBoot,BootStrap  
                    </span>
                </li>
                <li className="item">
                    <h2>Database Technologies</h2>
                    <span>
                        Mysql,Hibernate
                    </span>
                </li>
                <li className="item">
                    <h2>Development Tools</h2>
                    <span>
                        Eclipse,Spring Tool Suite,Visual Studio,GitHub
                    </span>
                </li>
                

            </ol>
        </div>
        
        </div>
        
    )
}
export default Home;