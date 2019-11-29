import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import { Header } from './components/header';
import { Content } from './components/content';
import { Footer } from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import AddPlayer from './components/addPlayer';
import View from './components/view';

// Class inherits from react.component
// Import Nav bar for all components
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar bg="primary" variant="dark">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/view">View Players</Nav.Link>
              <Nav.Link href="/addPlayer">Add Player</Nav.Link>
            </Nav>
          </Navbar>
          <Switch>
            <Route exact path="/" component={Content} />
            <Route path="/addPlayer" component={AddPlayer} />
            <Route path="/view" component={View} />
          </Switch>
          
        </div>
      </BrowserRouter>
    );
    
  }
}

export default App;
