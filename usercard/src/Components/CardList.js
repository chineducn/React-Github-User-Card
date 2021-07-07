import React, { Component } from 'react';
import Card from './Card';

export default class CardList extends Component {
    render() {
        return (
            <>
                {
                    this.props.listDetails.map(follower => {
                        return <Card details={follower} />
                    })
                }

            </>
        )
    }
}