import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserCard from './UserCard';

class ListUsers extends Component {

    constructor(props){
        super(props)
        this.state = {
            users: [],
            nextPage : 0
        }
        this.fetchUsers = this.fetchUsers.bind(this);
    }

    getNextPage(link){
        if(link){
            return link.split('>')[0].split('=')[1];
        }
        else return 0;
    }

    fetchUsers(){
        fetch('http://localhost:3000/users' + (this.state.nextPage ? "?since=" + this.state.nextPage : '' ))
            .then(res => res.json())
            .then(data => { this.setState(
                {users: data.response, nextPage: this.getNextPage(data.headers.link)})
            })
            .catch(console.log);
    }

    componentDidMount() {
        this.fetchUsers();
    }

    render(){
        return(
            <div>
                <h1 style = {
                    {fontWeight: "lighter"}
                }>
                    GitHub Users</h1>
                <div>
                    {this.state.users.map(user => <UserCard key = {user.login} user = {user}/>)}
                </div>
                <button onClick={this.fetchUsers}>Next</button>
            </div>
        );
    }
}

export default ListUsers;
