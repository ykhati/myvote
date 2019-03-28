import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './HomePage'
import LoginPage from './LoginPage';

class App extends React.Component{

  render(){
    return(  
      <div className="ui center aligned container" style={{ marginTop: '10px' }} >
        <Router>
          <Route exact path="/" component={LoginPage} />
          <Route path="/home" component={HomePage} />
        </Router>
      </div>
    )
  }
}  

export default App
