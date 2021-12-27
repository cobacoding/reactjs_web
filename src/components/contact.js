import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}><h2>Riky</h2>
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/avatar-business-people-set-one/128/avatar-32-512.png"
                            alt="avatar"
                            style={{height: '250px'}}
                        />
                        <p className="contact-text">
                        Ia mulai dipopulerkan pada tahun 1960 dengan diluncurkannya lembaran-lembaran Letraset yang menggunakan kalimat-kalimat dari Lorem Ipsum, dan seiring munculnya perangkat lunak Desktop Publishing seperti Aldus PageMaker juga memiliki versi Lorem Ipsum.
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                            <div className="contact-list">
                                <List>
                                    <ListItem>
                                        <ListItemContent className="contact-item">
                                            <i className="fa fa-whatsapp" aria-hidden="true"/>  08983399057
                                        </ListItemContent>
                                    </ListItem>
                                    
                                    <ListItem>
                                        <ListItemContent className="contact-item">
                                            <i className="fa fa-envelope" aria-hidden="true"/>  belajarcoding@yahoo.com
                                        </ListItemContent>
                                    </ListItem>
                                    
                                </List>
                            </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;