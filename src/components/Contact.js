import React from 'react';
import Github from '../assets/images/GitHub-Mark-32px.png';
import Linkedin from '../assets/images/iconmonstr-linkedin-3.svg';

const styles = {
    h1: {
        fontSize: '24px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontWeight: 'bold',
        margin: '20px 0px 30px'
    },
    p: {
        fontSize: '14px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        margin: '0px 0px 10px'
    }
}
function Contact() {
    return (
        <div id="contact" className="container-fluid bg-grey">
            <h1 className="text-center contact" style={styles.h1}>CONTACT</h1>
            <p style={styles.p} className="text-center"><span className="glyphicon glyphicon-map-marker"></span> Manchester, NH</p>
            <p style={styles.p} className="text-center"><span className="glyphicon glyphicon-phone"></span> (978)558-0290</p>
            <p style={styles.p} className="text-center"><span className="glyphicon glyphicon-envelope"></span> pksullivan@yahoo.com</p>
            <p className="text-center"><span className="glyphicon"><a href="https://github.com/shabobble" target="_blank"><img src={Github} /></a>  <a href="https://www.linkedin.com/in/patrick-sullivan-1517902a/" target="_blank"><img src={Linkedin} /></a></span></p>
    </div>
)};

export default Contact;