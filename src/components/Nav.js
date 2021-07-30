import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
    navbar: {
        backgroundColor: '#34568b'
    },
    links: {
        textDecoration: 'none'
    },
    list: {
        padding: '10px'
    }
}

function Navigation() {
    return (
        <div>
        <nav className="navbar navbar-default navbar-fixed-top ">
            <div className="container">
                <div id="myNavbar">
                    <ul className="nav navbar-nav flex-row navbar-right justify-content-end">
                        <li style={styles.list}><a href="#about" style={styles.links}>ABOUT ME</a></li>
                        <li style={styles.list}><a href="#portfolio" style={styles.links}>PROJECTS</a></li>
                        <li style={styles.list}><a href="#contact" style={styles.links}>CONTACT</a></li>
                        <li style={styles.list}><a href="#" style={styles.links}>RESUME</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    )
};

export default Navigation;