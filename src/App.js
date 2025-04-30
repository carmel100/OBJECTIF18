
import React  from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';

  class App extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        Person: {
          fullName: 'Roland',
          bio: `Je suis un étudiant en informatique passionné par le développement web et mobile.
                Curieux, autonome et toujours motivé à apprendre de nouvelles technologies, 
                je développe des projets personnels en React, Node.js et Python. 
                 `,
                
          imgSrc: '/etudiant-universite.jpg',
          profession: 'Student',
          show: false
        },
        timeElapsed: 0 
      };
  
      this.timer = null; 
    }
  
    componentDidMount() {
      this.timer = setInterval(() => {
        this.setState(prevState => ({
          timeElapsed: prevState.timeElapsed + 1
        }));
      }, 1000); 
    }
  
    componentWillUnmount() {
      clearInterval(this.timer); 
    }
  
    handleClick = () => {
      this.setState(prevState => ({
        Person: {
          ...prevState.Person,
          show: !prevState.Person.show
        }
      }));
    };
  
    render() {
      const { fullName, bio, imgSrc, profession, show } = this.state.Person;
      const { timeElapsed } = this.state;
  
      return (
        <>
        <div className="d-grid " style={{justifyItems:'center'}}>  
          <Button onClick={this.handleClick} className="my-2" style={{width:'fit-content'}} >
            {show ? 'Masquer le profil' : 'Afficher le profil'}
          </Button>
  
          {show && (
            <div>

              <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {imgSrc} />
      <Card.Body>
        <Card.Title>  Nom : {fullName} </Card.Title>
        <Card.Text>  Profession : {profession} </Card.Text>
        <Card.Text> Biographie : {bio} </Card.Text>
      </Card.Body>
    </Card>

            </div>
          )}
  
          <div>
            <h2>Temps écoulé depuis le montage : {timeElapsed} secondes</h2>
          </div>

          </div>
        </>
      );
    }
  }
  
export default App;