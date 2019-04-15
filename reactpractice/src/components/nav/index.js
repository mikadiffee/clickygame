import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./style.css";

class Nav extends Component {
  
  render(){
    return (
      <nav class="navbar navbar-expand-sm  sticky-top">
          <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav  d-flex justify-content-between container">
                <li class="nav-item ">
                <a className="navbar-brand" href="/"> Memory-Game </a>
                </li>
                <li class="nav-item" id="nav-msg">
                  <strong><span>{this.props.msgForPlayer}</span></strong>
                </li>
                <li class="nav-item" id="nav-score">
                  <span>
                    <strong>Score: {this.props.score} | Top Score: {this.props.topScore}</strong>
                  </span>
                </li>
              </ul>
        </div>       
          
      </nav>
    );
  } 
}

export default Nav;