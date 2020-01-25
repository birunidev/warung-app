import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import './App.scss';
import Menu from './containers/Menu/Menu';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Orders from './containers/Orders/Orders';

class App extends Component {

  state = {
    sidebarShow: false
  }

  barClickHandler = () => {
    this.setState((prevState) => ({
      sidebarShow: !prevState.sidebarShow
    }))
  }


  render() {
    const { sidebarShow } = this.state;

    return (
      <Router>
        <div className="App">
          <Navbar barHandler={this.barClickHandler} />
          <Sidebar showSidebar={sidebarShow} />
          <Switch>
            <Route exact path="/">
              <Menu />
            </Route>
            <Route path="/order">
              <Orders />
            </Route>
          </Switch>
        </div>
      </Router>
    );

  }
}

export default App;
