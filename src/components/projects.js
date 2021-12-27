import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0};
    }

    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                
                {/* Project 1 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 
                    'url(http://mustafaugur.net/wp-content/uploads/2018/01/react-native.png) center / cover'}}></CardTitle>
                    <CardTitle>React Project #1</CardTitle>
                    <CardText>
                    Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting.
                    </CardText>
                    <CardActions>
                        <Button colored>View</Button>
                        <Button colored>Buy</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

                {/* Project 2 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 
                    'url(http://mustafaugur.net/wp-content/uploads/2018/01/react-native.png) center / cover'}}></CardTitle>
                    <CardTitle>React Project #2</CardTitle>
                    <CardText>
                    Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting.
                    </CardText>
                    <CardActions>
                        <Button colored>View</Button>
                        <Button colored>Buy</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

                {/* Project 3 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 
                    'url(http://mustafaugur.net/wp-content/uploads/2018/01/react-native.png) center / cover'}}></CardTitle>
                    <CardTitle>React Project #3</CardTitle>
                    <CardText>
                    Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting.
                    </CardText>
                    <CardActions>
                        <Button colored>View</Button>
                        <Button colored>Buy</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                </div>
            )
        } else if(this.state.activeTab === 1){
            return (
                <div><h1>This is VueJS</h1></div>
            )
        } else if(this.state.activeTab === 2){
            return(
                <div><h1>Swift</h1></div>
            )
        } else if(this.state.activeTab === 3){
            return(
                <div><h1>This is Laravel</h1></div>
            )
        }
    }

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>VueJS</Tab>
                    <Tab>Swift</Tab>
                    <Tab>Laravel</Tab>
                </Tabs>

                
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                
            </div>
        )
    }
}

export default Projects;