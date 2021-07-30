import React from 'react';
import VaultBoy from '../assets/images/vaultboy1.jpg';
import Weather from '../assets/images/weather.jpg';
import JunkFood from '../assets/images/junkfood.jpg';
import TechBlog from '../assets/images/techblog.jpg';
import Gym from '../assets/images/gym.jpg';
import Office from '../assets/images/office.jpg';

const styles = {
    h2: {
        fontSize: '24px',
        margin: '20px 0px 30px',
        fontWeight: 'bold',
        fontFamily: 'Helvetica, Arial, sans-serif'
    },
    h4: {
        fontSize: '19px',
        margin: '10px 0px 30px',
        fontFamily: 'Helvetica, Arial, sans-serif'
    },
    p: {
        fontSize: '14px',
        fontFamily: 'Helvetica, Arial, sans-serif'
    },
    link: {
        fontSize: '14px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        textDecoration: 'none',
    },
    employeeThumbnail: {
        paddingBottom: '60px'
    }
}
function Projects() {
    return (
       <div id="portfolio" className="container-fluid text-center bg-grey">
           <h2 style={styles.h2}>Portfolio</h2>
           <h4 style={styles.h4}>Recent Projects</h4>
           <div className="row text-center">
               <div className="col-sm-4">
                   <div className="thumbnail pb-3">
                       <img src={VaultBoy} alt="Vault Boy giving a thumbs-up" />
                       <p style={styles.p}><strong>Fallout 76 Central Market</strong></p>
                       <p style={styles.p}>Inventory management app for Fallout 76 - allows players to add items to a searchable online database   that other players can search, contact the seller, and arrange a trade</p>
                       <p style={styles.p}><b>Tools Used</b>: Sequelize, HTML, CSS, JavaScript, Handlebars, Node.js, Express</p>
                       <a href="http://fallout76centralmarket.herokuapp.com" target="_blank"><p style={styles.link}>Deployed Application</p></a>
                        <a href="https://github.com/shabobble/project-2-group-c" target="_blank"><p style={styles.link}>GitHub Repository</p></a>
                   </div>
               </div>
               <div className="col-sm-4">
                   <div className="thumbnail pb-5">
                       <img src={Weather} alt="The word weather on a cloudy background" />
                       <p style={styles.p}><strong>Weather Forecast</strong></p>
                       <p style={styles.p}>Displays current weather and five-day forecast for multiple cities</p>
                       <p style={styles.p}><b>Tools Used: </b>HTML, CSS, JavaScript, Days.js, Jquery, Bootstrap, OpenWeather Weather and OneCall APIs</p>
                        <a href="https://shabobble.github.io/weather-app/" target="_blank"><p style={styles.link}>Deployed Application</p></a>
                        <a href="https://github.com/shabobble/weather-app" target="_blank"><p style={styles.link}>GitHub Repository</p></a>
                   </div>
               </div>
               <div className="col-sm-4">
                   <div className="thumbnail pb-5">
                       <img src={JunkFood} alt="a pile of junk food" />
                        <p style={styles.p}><strong>Find Me Food</strong></p>
                        <p style={styles.p}>Pulls user’s IP address and utilizes it to populate a list of restaurants near their address</p>
                        <p style={styles.p}><b>Tools Used:</b> HTML, CSS, JavaScript, Foundation</p>
                        <a href="https://unh-bootcamp-projects.github.io/project-1-group-c/" target="_blank"><p style={styles.link}>Deployed Application</p></a>
                        <a href="https://github.com/UNH-Bootcamp-Projects/project-1-group-c" target="_blank"><p style={styles.link}>GitHub Repository</p></a>
                   </div>
               </div>
           </div>
           <br></br>
           <br></br>
           <div className="row text-center">
               <div className="col-sm-4">
                   <div className="thumbnail">
                       <img src={TechBlog} alt="The words Tech Blog on a circuitboard background" />
                       <p style={styles.p}><strong>CMS Tech Blog</strong></p>
                       <p style={styles.p}>Allows multiple users to sign up, log in, and create blog posts/view posts from other users</p>
                       <p style={styles.p}><b>Tools Used:</b>HTML, CSS, JavaScript, Bootstrap, Express, Node.js, Sequelize</p>
                       <a href="https://mighty-waters-63013.herokuapp.com/" target="_blank"><p style={styles.link}>Deployed Application</p></a>
                        <a href="https://www.github.com/shabobble/tech-blog" target="_blank"><p style={styles.link}>GitHub Repository</p></a>
                   </div>
               </div>
               <div className="col-sm-4">
                   <div className="thumbnail">
                       <img src={Gym} alt="An empty fitness center" />
                       <p style={styles.p}><strong>Fitness Tracker</strong></p>
                       <p style={styles.p}>Fitness tracker that allows user to create a workout plan, add exercises to it, and track duration/combined weight of workouts for the past seven workouts</p>
                       <p style={styles.p}><b>Tools Used: </b>Express, JavaScript, Node.js, Mongoose, MongoDB</p>
                       <a href="https://still-forest-94479.herokuapp.com/" target="_blank"><p style={styles.link}>Deployed Application</p></a>
                        <a href="https://github.com/shabobble/fitnesstracker" target="_blank"><p style={styles.link}>GitHub Repository</p></a>
                   </div>
               </div>
               <div className="col-sm-4">
                   <div className="thumbnail pb-5">
                       <img src={Office} alt="The cast of NBC's The Office" />
                       <p style={styles.p}><strong>Employee Tracker</strong></p>
                       <p style={styles.p}>Command-line application that allows the user to manage the departments, roles and employees in their company</p>
                       <p style={styles.p}><b>Tools Used: </b>Node.js, JavaScript, MySQL</p>
                       <a href="https://github.com/shabobble/employee-tracker" target="_blank"><p style={styles.link}>GitHub Repository</p></a>
                   </div>
               </div>
        </div>
    </div>
    )
}

export default Projects;