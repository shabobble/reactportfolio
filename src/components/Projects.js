import React from 'react';
import VaultBoy from '../assets/images/vaultboy1.jpg';
import Weather from '../assets/images/weather.jpg';
import JunkFood from '../assets/images/junkfood.jpg';

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
    }
}
function Projects() {
    return (
       <div id="portfolio" className="container-fluid text-center bg-grey">
           <h2 style={styles.h2}>Portfolio</h2>
           <h4 style={styles.h4}>Recent Projects</h4>
           <div className="row text-center">
               <div className="col-sm-4">
                   <div className="thumbnail">
                       <img src={VaultBoy} alt="Vault Boy giving a thumbs-up" />
                       <p style={styles.p}><strong>Fallout 76 Central Market</strong></p>
                       <a href="http://fallout76centralmarket.herokuapp.com" target="_blank"><p>Deployed Application</p></a>
                        <a href="https://github.com/shabobble/project-2-group-c" target="_blank"><p>GitHub Repository</p></a>
                   </div>
               </div>
               <div className="col-sm-4">
                   <div className="thumbnail">
                       <img src={Weather} alt="The word weather on a cloudy background" />
                       <p style={styles.p}><strong>Weather Forecast</strong></p>
                        <a href="https://shabobble.github.io/weather-app/" target="_blank"><p>Deployed Application</p></a>
                        <a href="https://github.com/shabobble/weather-app" target="_blank"><p>GitHub Repository</p></a>
                   </div>
               </div>
               <div className="col-sm-4">
                   <div className="thumbnail">
                       <img src={JunkFood} alt="a pile of junk food" />
                        <p style={styles.p}><strong>Find Me Food</strong></p>
                        <a href="https://unh-bootcamp-projects.github.io/project-1-group-c/" target="_blank"><p>Deployed Application</p></a>
                        <a href="https://github.com/UNH-Bootcamp-Projects/project-1-group-c" target="_blank"><p>GitHub Repository</p></a>
                   </div>
               </div>
           </div>
       </div>
    )
}

export default Projects;