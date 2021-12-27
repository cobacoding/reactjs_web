import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col="{12}">
                    <img
                        src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
                        alt="avatar"
                        className="avatar-img"
                    />

                    <div className="banner-text">
                        <h1>Full Stack Web Developer</h1>
                        <hr />
                        <p>Vue Js | React Js | React Native | Swift</p>
                        <div className="social-links">
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-instagram" aria-hidden="true" />
                            </a>
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                            </a>
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-facebook-square" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;