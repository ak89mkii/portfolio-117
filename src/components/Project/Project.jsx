import React from 'react'
import { Header, Icon, Image, Card, Button, Divider, Grid, Item, Message, Segment } from 'semantic-ui-react'
import './Project.css'
import war from '../../Img/war.png'
import dicedex from '../../Img/dicedex.png'
import paj from '../../Img/paj.png'
import repbucket from '../../Img/repbucket.png'
import codecstory from '../../Img/codec_story.png'
import icontextuall from '../../Img/icontextuall.png'

const Project = () => {
    return (
        <div>
            <Divider horizontal>
              <Header as='h2'>
                <Icon name='file code' />
                Projects
              </Header>
            </Divider>

            <Grid>
            <Grid.Column computer={14}>
            <Card.Group itemsPerRow={2} stackable>

                {/* Card 01 */}
                <Card fluid centered size='large' stackable>
                    <Card.Content>
                        <Item.Header><p className='card'><h1>War Card Game </h1>(Front-End)</p>
                        </Item.Header>
                        <Divider />
                        <div className='photo'>
                            <Item.Image src={war} size='large' wrapped ui={false} />
                        </div>
                        <h3>
                            <a href='http://war-were-declared-4.surge.sh/' target="_blank">
                                <Button size='large' color='yellow'>
                                    <Icon size='large' name='power off'/>View Project
                                </Button> 
                                </a>
                                <br></br>
                                <br></br>
                                <a href='https://github.com/ak89mkii/war-project-01' target="_blank">
                                <Button size='large' color='black'>
                                    <Icon size='large' name='github square' inverted color='grey'/>Github Repo
                                </Button> 
                            </a>
                        </h3>
                        <Divider/>
                        <Item.Description>
                            <p><h3>Description:</h3>(Front-End) | A War playing card variant with a retro game theme.</p>
                            <h3>- Technologies Used -</h3>
                                <p><h4>Front-End:</h4>HTML5 | CSS3 | JavaScript (ES2018) | Bootstrap (CSS Framework)</p>
                                <p><h4>Back-End:</h4>N/A</p>
                                <p><h4>Authentication:</h4>N/A</p>
                                <p><h4>Version Control:</h4>Git | GitHub</p>
                                <p><h4>Deployment:</h4>surge.sh</p>
                        </Item.Description>
                    </Card.Content>
                </Card>
                    
                {/* Card 02 */}
                <Card fluid centered size='large' stackable>
                    <Card.Content>
                        <Item.Header><p className='card'><h1>DiceDex: Tabletop Tracker</h1>(RESTful, CRD)</p>
                        </Item.Header>
                        <Divider />
                        <div className='photo'>
                            <Item.Image src={dicedex} size='large' wrapped ui={false} />
                        </div>
                        <h3>
                                <a href='https://tabletop-tracker-project-117.herokuapp.com/users' target="_blank">
                                <Button size='large' color='yellow'>
                                    <Icon size='large' name='power off'/>View Project
                                </Button> 
                                </a>
                                <br></br>
                                <br></br>
                                <a href='https://github.com/ak89mkii/tabletop-tracker-project-01' target="_blank">
                                <Button size='large' color='black'>
                                    <Icon size='large' name='github square' inverted color='grey'/>Github Repo
                                </Button> 
                                </a>
                            </h3>
                        <Divider/>
                        <Item.Description>
                            <p><h3>Description:</h3> (RESTful, CRD) | DiceDex is an application that enables groups of users to create shared tabletop libraries, wishlists, as well as leave comments on a message board.</p>
                            <h3>- Technologies Used -</h3>
                                <p><h4>Front-End:</h4>HTML5 | CSS3 | JavaScript (ES2018) | Bootstrap (CSS Framework)</p>
                                <p><h4>Back-End:</h4>Node.js | Express.js | MongoDB (Database) | Mongoose</p>
                                <p><h4>Authentication:</h4>Google OAuth</p>
                                <p><h4>Version Control:</h4>Git | GitHub</p>
                                <p><h4>Deployment:</h4>Heroku</p>
                        </Item.Description>
                    </Card.Content>
                </Card>
                                
                {/* Card 03 */}
                <Card centered size='large' stackable>
                    <Card.Content>
                        <Item.Header><p className='card'><h1>PAJ: Project Manager</h1>(Team Project, RESTful, CRUD)</p>
                        </Item.Header>
                        <Divider/>
                        <div className='photo'>
                            <Item.Image src={paj} size='large' wrapped ui={false} />
                        </div>
                        <h3>
                                <a href='https://paj-03-project-hi-nu.herokuapp.com/' target="_blank">                                
                                <Button size='large' color='yellow'>
                                    <Icon size='large' name='power off'/>View Project
                                </Button> 
                                </a>
                                <br></br>
                                <br></br>
                                <a href='https://github.com/ak89mkii/PAJ' target="_blank">
                                <Button size='large' color='black'>
                                    <Icon size='large' name='github square' inverted color='grey'/>Github Repo
                                </Button> 
                                </a>
                            </h3>
                        <Divider/>
                        <Item.Description>
                            <p><h3>Description:</h3> (Team Project, MERN Stack, CRUD) | PAJ, the Project Assistance Journal, is a platform that enables users to add and monitor their project progressions as well facilitating collaborative efforts.</p>
                            <h3>- Technologies Used -</h3>
                                <p><h4>Front-End:</h4>HTML5 | CSS3 | JavaScript (ES2018) | React.js | Semantic UI React (CSS Framework)</p>
                                <p><h4>Back-End:</h4>Node.js | Express.js | MongoDB (Database)</p>
                                <p><h4>Authentication:</h4>Authentication</p>
                                <p><h4>Version Control:</h4>Git | GitHub</p>
                                <p><h4>Deployment:</h4>Heroku</p>
                        </Item.Description>
                    </Card.Content>
                </Card>

                {/* Card 04 */}  
                <Card centered size='large' stackable>
                    <Card.Content>
                        <Item.Header><p className='card'><h1>RepBucket: Goals Tracker</h1>(RESTful, CRUD)</p>
                        </Item.Header>
                        <Divider/>
                        <div className='photo'>
                            <Item.Image src={repbucket} size='large' wrapped ui={false} />
                        </div>
                            <h3>
                                <a href='https://repbucket-04.herokuapp.com/' target="_blank">
                                <Button size='large' color='yellow'>
                                    <Icon size='large' name='power off'/>View Project
                                </Button> 
                                </a>
                                <br></br>
                                <br></br>
                                <a href='https://github.com/ak89mkii/Repbucket-project-04' target="_blank">
                                <Button size='large' color='black'>
                                    <Icon size='large' name='github square' inverted color='grey'/>Github Repo
                                </Button> 
                                </a>
                            </h3>
                        <Divider/>
                        <Item.Description>
                            <p><h3>Description:</h3> (RESTful, CRUD) | RepBucket is a platform that "gamifies" the tracking and highlighting of achievements, activities, skills, hobbies, and goals. From the mundane to monumental, goals are your "Quests", which can be found in your "Quest Journal". Your skills and hobbies are represented as skills on your "Talent Tree".</p>
                            <h3>- Technologies Used -</h3>
                                <p><h4>Front-End:</h4>HTML5 | CSS3 | Django | Bootstrap (CSS Framework)</p>
                                <p><h4>Back-End:</h4>Python 3 | Django | PostgreSQL (Database)</p>
                                <p><h4>Authentication:</h4>Django Built-in Auth</p>
                                <p><h4>Version Control:</h4>Git | GitHub</p>
                                <p><h4>Deployment:</h4>Heroku</p>
                        </Item.Description>
                    </Card.Content>
                </Card>

                {/* Card 05 */}
                <Card fluid centered size='large' stackable>
                    <Card.Content>
                        <Item.Header><p className='card'><h1>Codec Story: A Text Adventure</h1>(DEMO)</p>
                        </Item.Header>
                        <Divider/>
                        <div className='photo'>
                            <Item.Image src={codecstory} size='large' wrapped ui={false} />
                        </div>
                        <h3>
                            <a href='https://codecu.herokuapp.com/' target="_blank">
                            <Button size='large' color='yellow'>
                                <Icon size='large' name='power off'/>View Project
                            </Button> 
                            </a>
                            <br></br>
                            <br></br>
                            <a href='https://github.com/ak89mkii/codecu' target="_blank">
                            <Button size='large' color='black'>
                                <Icon size='large' name='github square' inverted color='grey'/>Github Repo
                            </Button> 
                            </a>
                        </h3>
                        <Divider/>
                        <Item.Description>
                            <p><h3>Description:</h3>(DEMO) | Codec Story is a text adventure game where players make decisions, branching and progressing the story. Choose wisely, not every decision will result in success. (Character Image Placeholders Used) </p>
                            <h3>- Technologies Used -</h3>
                                <p><h4>Front-End:</h4>HTML5 | CSS3 | Bootstrap (CSS Framework)</p>
                                <p><h4>Back-End:</h4>Python 3 | Flask | Gunicorn</p>
                                <p><h4>Authentication:</h4>N/A</p>
                                <p><h4>Version Control:</h4>Git | GitHub</p>
                                <p><h4>Deployment:</h4>Heroku</p>
                        </Item.Description>
                    </Card.Content>
                </Card>

                {/* Card 06 */}  
                <Card centered size='large' stackable>
                    <Card.Content>
                        <Item.Header><p className='card'><h1>iContextuall: Twilio SMS GUI</h1>(Template / Guide)</p>
                        </Item.Header>
                        <Divider/>
                        <div className='photo'>
                            <Item.Image src={icontextuall} size='large' wrapped ui={false} />
                        </div>
                        <h3>
                            <a href='https://ak89mkii.medium.com/build-a-simple-gui-for-twilio-sms-using-flask-not-deployment-ready-785e1df2e8a0' target="_blank">
                            <Button size='large' color='black'>
                                <Icon size='large' name="medium icon"/>View Article
                            </Button> 
                            </a>
                            <br></br>
                            <br></br>
                            <a href='https://github.com/ak89mkii/iContextuall' target="_blank">
                            <Button size='large' color='black'>
                                <Icon size='large' name='github square' inverted color='grey'/>Github Repo
                            </Button> 
                            </a>
                        </h3>
                        <Divider/>
                        <Item.Description>
                            <p><h3>Description:</h3>(DEMO) | Codec Story is a text adventure game where players make decisions, branching and progressing the story. Choose wisely, not every decision will result in success. (Character Image Placeholders Used) </p>
                            <h3>- Technologies Used -</h3>
                                <p><h4>Front-End:</h4>HTML5 | CSS3 | Bootstrap (CSS Framework)</p>
                                <p><h4>Back-End:</h4>Python 3 | Flask | Twilio Python (Helper Library)</p>
                                <p><h4>Authentication:</h4>N/A</p>
                                <p><h4>Version Control:</h4>Git | GitHub</p>
                                <p><h4>Deployment:</h4>N/A</p>
                        </Item.Description>
                    </Card.Content>
                </Card>
            </Card.Group>
            </Grid.Column>
            </Grid>
            
            <br></br>
            <br></br>
        </div>
    )
}

export default Project