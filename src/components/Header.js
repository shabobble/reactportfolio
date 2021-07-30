import React from 'react';

const styles = {
    jumbotron: {
        backgroundColor: '#34568b',
        color: '#ffffff',
        padding: '100px 25px',
        fontFamily: 'Montserrat, sans-serif',
    },
    h1: {
        fontSize: '63px',
    },
    p: {
        fontSize: '21px'
    }
}

function Header() {
    return (
    <div className="jumbotron text-center">
        <h1 style={styles.h1}>Patrick Sullivan</h1>
        <p style={styles.p}>Junior Full-Stack Web Developer specializing in RESTful APIs and back-end development</p>
    </div>
    )
}

export default Header;