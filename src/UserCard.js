import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./user_card.css";

class UserCard extends Component {
    constructor(props){
        super(props);
        this.user = props.user;
    }
    render(){
        return <div className = {'card box-hover user-card'}>
            <div className = {'vertical-line'}></div>
            <div className = {'card-content'}>
                <div className = {'vertical-line'}></div>
                <div className = {'flex-group'}>
                    <div className = {'user-login'}>{this.user.login}</div>
                    <div className = {'detail'}>
                        <Link to = {this.user.login + '/details'}>
                            <button className = {'detail-button'}>
                                Details
                            </button>
                        </Link>
                    </div>
                </div>
                <div className = {'user-id'}>ID: {this.user.id}</div>
            </div>
        </div>
    }
}

export default UserCard;
