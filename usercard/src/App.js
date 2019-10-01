import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails:{},
    }
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/rodpa715`)
      .then(response => {
        
        debugger
        this.setState({userDetails:response.data})
    })
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">        
        {this.state.userDetails.login}
        <img src={this.state.userDetails.avatar_url} alt=""/>     
      </header>
    </div>
    );
  }
}
