import React, { Component } from 'react';
import { Container} from 'reactstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
//import components
import AddToggle from './components/AddToggle'

class App extends Component {
  render() {
    return (  
      <Container className="App">
          <div  className="addToggle" >          
                <AddToggle className="addToggle" />
          </div> 
        </Container>    
    );
  }
}

export default App;
