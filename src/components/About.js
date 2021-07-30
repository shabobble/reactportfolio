import React from 'react';
import avatar from '../assets/images/profile.jpg';

const styles = {
    container: {
        padding: "60px 50px"
    },
    h1: {
        fontSize: '36px',
        margin: '20px 0px 10px',
        padding: '20px',
        fontFamily: 'Helvetica, Arial, sans-serif'
    },
    h3: {
        fontSize: '24px',
        margin: '20px 0px 10px',
        padding: '20px',
        fontFamily: 'Helvetica, Arial, sans-serif'
    }
}

function About() {
    return (
        <div id="about" className="container-fluid">
            <div className="row">
                <div className="col-sm-9">
                    <h1 style={styles.h1}>About Me</h1>
                    <h3 style={styles.h3}>Hey! I'm Patrick. I'm a junior web developer with skills ranging across the full-stack of web development. I have a passion for solving everyday problems with coding. I'm constantly looking to add to my knowledge base by familiarizing myself with new tools or picking up new skills. I adapt easily to new situations and give 110% to anything I'm working on. I'm eager to join a team where I can work to harness the power of the web to help others.</h3>
                    <h3 style={styles.h3}>In my downtime, I enjoy reading (both fiction and non-fiction), video games, board games, doing the New York Times crossword every day, Ultimate Frisbee, hiking, and spending time with my beautiful wife, Katie, and our cat, Ashton.</h3>
                </div>
                <div className="col-sm-3">
                    <span><img id="profile" src={avatar} /></span>
                </div>
            </div>
      </div>
    )
};

export default About;