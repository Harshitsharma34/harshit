import React, { Component } from "react";
import image from  "../Assets/lock.svg"
import '../Css/more-work.css'
import arrow from '../Assets/Arrow.svg'

class Toast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogged: false,
      loginParams:"",
    };
  }
  handleFormChange = event => {
    let loginParamsNew = { ...this.state.loginParams };
    let val = event.target.value;
    this.setState({
      loginParams: val
    });
  };
 

  login = event => {
    let user_password = this.state.loginParams;
    if (user_password === "123") {
      localStorage.setItem("token", "T");
      this.setState({
        islogged: true
      });
      window.location.href='http://google.com';
    }
    event.preventDefault();
  };
  render() {
   
    return (
      
      <div className="container">
       
      
          <div className="project">
            <div className="project-image"></div>
            <h2 className="project-name">Project Name <img className="lock" src = {image} alt="Lock" /></h2>
            <p className="project-description">Description asdjad asshhee shahsdasdhb wahbdwah</p>
            <form onSubmit={this.login} className="form-signin">
                  <input 
                  className="password-input"
                  type="password" 
                  onChange={this.handleFormChange}
                  placeholder="Type the key"></input>
                  <input 
                  className="arrow"
                  type="image" 
                  alt="submit" 
                  src ={arrow} 
                  width={40} 
                  
          ></input>

            </form>
          </div>
          

      </div>
    );
  }
}
export default  Toast;
