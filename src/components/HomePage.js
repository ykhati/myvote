import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { fetchData } from '../actions'
import FacebookService from './FacebookService';

class HomePage extends React.Component{

  state = {
    username: localStorage.getItem('username'),
    isLoggedOut: false
  };

  componentDidMount(){
    this.props.fetchData()
  }
  
  onFacebookLogout = (loginStatus) => {
    if (loginStatus === false) {
      this.setState({isLoggedOut: true})
      window.FB.logout(function(response){ 
        console.log("logged out")        
        //window.deleteFbCookie()
        //window.deleteAllCookies()

        //response.authResponse.accessToken = ''
        
        // if (!response.authResponse.accessToken){
        //   window.location.href = "http://localhost:3000"
        //   //this.props.history.push('/')  
        // }
        //alert('Facebook logged out');
      })
    } else {
      alert('Facebook logout error');
    }
  }

  onClick = () => {
    if(this.state.isLoggedOut){
      this.props.history.push('/') 
    }
  }

  renderList(){
    return this.props.loginData.data.map( obj => {
      return (
        <div className="column" style={{ textAlign: 'left' }} key={obj.id}>
            <div className="ui segment" >
                <img className="centered medium ui image" src={obj.image} alt={obj.id}></img>
                <h2><b>{obj.name}</b></h2>
                <p>{obj.bio}</p>
                <a href={obj.link}>{obj.link_text}</a>
            </div>
        </div>
      )
    })
  }

  render(){
    const { text } = this.props.loginData

    if(!text) {
      //for initial loading, else we get undefined value
      return null
    }

    return(
      <div className="content">        
          {Object.keys(text).filter( obj => obj === "logged_in") 
            .map((o, index) => {
              return (  //using index as key since there is no unique ID to use as a key
                <div key={index}>
                   <h3>{text[o].headline}</h3>          
                </div>
              )     
            })
          } 
          <div className="item" style={{textAlign: 'Right'}}>
            <div>
                <FacebookService onLogout = {this.onFacebookLogout} temp={false}>
                    Welcome {this.state.username}! <Link to='/' style={{textDecoration: 'underline'}} onClick={this.onClick}>Logout</Link>
                </FacebookService>
            </div>                  
          </div>  
          <div className="ui three column doubling stackable grid container" style={{ marginTop: '10px', height:'500px' }}>{this.renderList()}</div>            
      </div>  
    )
  }
}

const mapStateToProps = (state) => {
  return {loginData: state.apiData}
}

export default connect(mapStateToProps, { fetchData })(HomePage)

