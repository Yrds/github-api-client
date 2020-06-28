import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import RepoListItem from './RepoListItem';

class UserDetails extends Component {

    constructor(props){
        super(props);
        this.state = {
            user: {  login:'', date: new Date() },
            repos: []
        }
    }

    componentDidMount(){
        console.log('lonely day');
        this.fetchDetails();
        this.fetchRepositories();
    }

    parseUser(user){
        user.created_at = new Date(user.created_at).toLocaleString();
        console.log(user.created_at);

        return user;
    }

    fetchDetails(){
        fetch('http://localhost:3000/users/' + this.props.match.params.userName + '/details')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    user: this.parseUser(data.response)
                })
            })
            .catch(console.log);
    }

    fetchRepositories(){
        fetch('http://localhost:3000/users/' + this.props.match.params.userName + '/repos')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    repos: data.response
                })
            })
            .catch(console.log);
    }

    render() {
        return (
            <div>
                <div>
                    { this.state.user.id }
                    { this.state.user.login }
                    { this.state.user.html_url}
                    { this.state.user.created_at }
                </div>
                <ul>
                    { this.state.repos.map(repo => <RepoListItem key = {repo.id} repo = {repo}/>) }
                </ul>
            </div>
        )
    }
}

export default withRouter(UserDetails);
