import React, { Component } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    width: 800px;
    margin: 20px auto;
    font-size: 1rem;

    img {
        width: 250px;
        height:  250px;
    }

    section {
        height: 250px;
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