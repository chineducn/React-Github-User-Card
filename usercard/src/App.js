import React, { Component } from 'react';
import axios from 'axios';
import Card from './Components/Card';
import CardList from './Components/CardList';
import styled from 'styled-components';
import './App.css';

const StyledDiv = styled.div`
  /* max-width: 800px; */
  margin: 0 auto;
`

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: {},
      cardList: [],
    }
  }

  componentDidMount() {
    const userPromise = axios.get(`https://api.github.com/users/rodpa715`);
    const followersPromise = axios.get(`https://api.github.com/users/rodpa715/followers`);
    debugger
    Promise.all([userPromise, followersPromise])
      .then(response => {
        debugger
        this.setState({
          userDetails: response[0].data,
          cardList: response[1].data,
        })
      })
  }

  render() {
    return (
      <div className="App">
        <StyledDiv>
          <header className="App-header">
            <Card details={this.state.userDetails} />
            <CardList listDetails={this.state.cardList} />
          </header>
        </StyledDiv>
      </div>
    );
  }
}
