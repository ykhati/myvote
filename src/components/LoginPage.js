import React from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../actions'
import FacebookService from './FacebookService'

class LoginPage extends React.Component{

  state = {
    isLoggedIn: false
  }

  componentDidMount(){
    this.props.fetchData()
  }

  onFacebookLogin = (loginStatus, resultObject) => {
    if (loginStatus === true) {
      this.setState({
        username: resultObject.user.name,
        loggedIn: true
      });
      localStorage.setItem('username', this.state.username)
    }
  }

  onClick = () => {
      this.props.history.push('/home')   
  } 

  render(){
    const { text } = this.props.logoutData 
  
    //for initial loading, else we get undefined value
    if(!text) {
      return null
    }
    return(
      <div className="content">
          {Object.keys(text).filter( obj => obj === "logged_out") 
            .map((o, index) => {
              return (  //using index as key since there is no unique ID to use as a key
                <div key={index}>
                   <h3>{text[o].headline}</h3>              
                   <div>
                     <FacebookService onLogin = {this.onFacebookLogin} temp={true}>
                       <button className="ui button" onClick={this.onClick}>{text[o].login_button.toUpperCase()}</button> 
                     </FacebookService>
                   </div>            
                </div>
              )     
            })
          }         
      </div>  
    )
  }
}

const mapStateToProps = (state) => {
  return {logoutData: state.apiData}
}

export default connect(mapStateToProps, { fetchData })(LoginPage)
