import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                            src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                            alt="avatar"
                            style={{height: '200px'}}
                            />
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Riky Kurniawan</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>Ia mulai dipopulerkan pada tahun 1960 dengan diluncurkannya lembaran-lembaran Letraset yang menggunakan kalimat-kalimat dari Lorem Ipsum.</p>
                        <h5>Address</h5>
                        <p>Jl Jomblo Sejati</p>
                        <h5>Phone</h5>
                        <p>089 83399057</p>
                        <h5>Email</h5>
                        <p>belajarcoding@yahoo.com</p>
                        <h5>Web</h5>
                        <p>https://cobacoding.github.io/</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education 
                            startYear={2014}
                            endYear={2017}
                            schoolName="Bina Sarana Informatika"
                            schoolDescription="Ia mulai dipopulerkan pada tahun 1960 dengan diluncurkannya lembaran-lembaran Letraset yang menggunakan kalimat-kalimat dari Lorem Ipsum."
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2>Experience</h2>

                        <Experience 
                            startYear={2018}
                            endYear={2019}
                            jobName="First Job"
                            jobDescription="Ia mulai dipopulerkan pada tahun 1960 dengan diluncurkannya lembaran-lembaran Letraset yang menggunakan kalimat-kalimat dari Lorem Ipsum."
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Skills</h2>
                        <Skills
                            skill="javascript"
                            progress={70}
                        />
                        <Skills
                            skill="VueJS"
                            progress={85}
                        />
                        <Skills
                            skill="HTML/CSS"
                            progress={90}
                        />
                        <Skills
                            skill="ReactJS"
                            progress={70}
                        />
                        
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;