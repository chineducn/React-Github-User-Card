import React, { Component } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    background-color: white;
    color: black;
    display: flex;
    width: 800px;
    margin: 20px auto;
    font-size: 1rem;

    img {
        width: 250px;
        height:  250px;
    }

    section {
        margin-left: 25px;
        height: 150px;
        line-height: 1rem;
        text-align: left;
    }
`

export default class Card extends Component {
    render() {
        const { avatar_url, name, login, location, url, followers, following, bio } = this.props.details;

        return (
            <StyledDiv>
                <img src={avatar_url} alt="user avatar" />
                <section>
                    <h3>{name}</h3>
                    <p>{login}</p>
                    <p>Location {location}</p>
                    <p>Profile: {url}</p>
                    <p>Followers: {followers}</p>
                    <p>Following: {following}</p>
                    <p>Bio: {bio}</p>
                </section>
            </StyledDiv>
        )
    }
}