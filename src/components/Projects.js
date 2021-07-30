import React from 'react';
import VaultBoy from '../assets/images/vaultboy1.jpg';
import Weather from '../assets/images/weather.jpg';
import JunkFood from '../assets/images/junkfood.jpg';

function Projects() {
    return (
       <div id="portfolio" className="container-fluid text-center bg-grey">
           <h2>Portfolio</h2>
           <h4>Recent Projects</h4>
           <div className="row text-center">
               <div className="col-sm-4">
                   <div className="thumbnail">
                       <img src={VaultBoy} alt="Vault Boy giving a thumbs-up" />
                       <p><strong>Fallout 76 Central Market</strong></p>
                       <a href="http://fallout76centralmarket.herokuapp.com" target="_blank"><p>Deployed Application</p></a>
                        <a href="https://github.com/shabobble/project-2-group-c" target="_blank"><p>GitHub Repository</p></a>
                   </div>
               </div>
               <div className="col-sm-4">
                   <div className="thumbnail">
                       <img src={Weather} alt="The word weather on a cloudy background" />
                       <p><strong>Weather Forecast</strong></p>
                        <a href="https://shabobble.github.io/weather-app/" target="_blank"><p>Deployed Application</p></a>
                        <a href="https://github.com/shabobble/weather-app" target="_blank"><p>GitHub Repository</p></a>
                   </div>
               </div>
               <div className="col-sm-4">
                   <div className="thumbnail">
                       <img src={JunkFood} alt="a pile of junk food" />
                        <p><strong>Find Me Food</strong></p>
                        <a href="https://unh-bootcamp-projects.github.io/project-1-group-c/" target="_blank"><p>Deployed Application</p></a>
                        <a href="https://github.com/UNH-Bootcamp-Projects/project-1-group-c" target="_blank"><p>GitHub Repository</p></a>
                   </div>
               </div>
           </div>
       </div>
    )
}

export default Projects;