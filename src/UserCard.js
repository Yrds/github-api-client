import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./user_card.css";

class UserCard extends Component {
    constructor(props){
        super(props);
        this.user = props.user;
    }
    render(){
        return <div className = {'card'}>
            <div className = {'user-id'}>{this.user.id}</div>
            <div className = {'user-login'}>{this.user.login}</div>
            <div className = {'detail'}>
                <button className = {'detail-button'}>
                    <Link to = {this.user.login + '/details'} className = {'detail-button'}>Details</Link>
                </button>
            </div>
        </div>
    }
}

export default UserCard;
