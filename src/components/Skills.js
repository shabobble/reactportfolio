import React from 'react';
import html from '../assets/skills/HTML.png'
import js from '../assets/skills/JS.png'
import bootstrap from '../assets/skills/bootstrap.png';
import css from '../assets/skills/CSS.png';
import git from '../assets/skills/git.png';
import jquery from '../assets/skills/jquery.png';
import mongodb from '../assets/skills/mongodb.png';
import node from '../assets/skills/node.png';
import react from '../assets/skills/react.png';
import sql from '../assets/skills/sql.png';
import webpack from '../assets/skills/webpack.png';

function Skills() {
    return(
        <section className="skills">
        <h4>Technical Skills</h4>
        <div className="skill-list">
          <ul className="list">
            <li>
              <img src={html} /> 
            </li>
            <li>
              <img src={css} />
            </li>
            <li>
              <img src={bootstrap} />
            </li>
            <li>
              <img src={js} />
            </li>
            <li>
              <img src={jquery} />
            </li>
            <li>
              <img src={git} />
            </li>
            <li>
              <img src={node} />
            </li>
            <li>
              <img src={sql} />
            </li>
            <li>
              <img src={mongodb} />
            </li>
            <li>
              <img src={react} />
            </li>
            <li>
              <img src={webpack} />
            </li>
          </ul>
        </div>
      </section>
    )
}

export default Skills;
