import React from 'react';
import avatar from '../assets/images/profile.jpg';

const styles = {
    container: {
        padding: "60px 50px"
    },
    h1: {
        fontSize: '36px',
        margin: '20px 0px 10px',
        padding: '20px'
    },
    h3: {
        fontSize: '24px',
        margin: '20px 0px 10px',
        padding: '20px'
    }
}

function About() {
    return (
        <div id="about" className="container-fluid">
            <div className="row">
                <div className="col-sm-9">
                    <h1 style={styles.h1}>About Me</h1>
                    <h3 style={styles.h3}>Hey! I'm Patrick. I'm a junior web developer with skills ranging across the full-stack of web development. I'm constantly looking to add to my knowledge base by familiarizing myself with new tools or picking up new skills. I adapt easily to new situations and give 110% to anything I'm working on. </h3>
                </div>
                <div className="col-sm-3">
                    <span><img id="profile" src={avatar} /></span>
                </div>
            </div>
      </div>
    )
};

export default About;