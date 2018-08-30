import React, { Component } from 'react';
import { Container} from 'reactstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Provider} from 'react-redux';
import store from './store';

//import components
import AddToggle from './components/AddToggle'

class App extends Component {
  render() {
    return (  
      <Provider store={store}>
        <Container className="App">
          <div  className="addToggle" >          
                <AddToggle className="addToggle" />
          </div> 
        </Container>    
      </Provider>
    );
  }
}

export default App;
