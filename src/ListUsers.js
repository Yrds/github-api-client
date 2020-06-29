import React, { Component } from 'react';
import UserCard from './UserCard';
import env from './.env';

class ListUsers extends Component {

    constructor(props){
        super(props)
        this.state = {
            users: [],
            nextPage : 0
        }
        this.fetchUsers = this.fetchUsers.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.firstPage = this.firstPage.bind(this);
    }


    getNextPage(link){
        if(link){
            return link.split('>')[0].split('=')[1];
        }
        else return 0;
    }

    nextPage(){
        this.fetchUsers(this.state.nextPage);
    }

    firstPage(){
        this.fetchUsers(0);
    }

    fetchUsers(page = 0){
        console.log('env', env)
        fetch(env.API_URL + '/users' + (page ? "?since=" + page : '' ))
            .then(res => res.json())
            .then(data => {
                this.setState(
                    {users: data.response, nextPage: this.getNextPage(data.headers.link)}
                )
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
                    {
                        fontWeight: "lighter",
                        textAlign: 'center',
                        marginTop: '3rem',
                        fontColor: '#24292e'
                    }
                }>
                    GitHub Users</h1>
                <div className = {'button-group'}>
                    <button onClick={this.firstPage}>First</button>
                    <button onClick={this.nextPage}>Next</button>
                </div>
                <div>
                    {this.state.users.map(user => <UserCard key = {user.login} user = {user}/>)}
                </div>
                <div className = {'button-group'}>
                    <button onClick={this.firstPage}>First</button>
                    <button onClick={this.nextPage}>Next</button>
                </div>
            </div>
        );
    }
}

export default ListUsers;
