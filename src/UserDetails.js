import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import RepoListItem from './RepoListItem';
import style from './user_details.css';
import env from './.env';

class UserDetails extends Component {

    constructor(props){
        super(props);
        this.state = {
            user: {  login:'', date: new Date() },
            repos: []
        }
    }

    componentDidMount(){
        this.fetchDetails();
        this.fetchRepositories();
    }

    parseUser(user){
        user.created_at = new Date(user.created_at).toLocaleDateString({weekday: 'long'});
        return user;
    }

    fetchDetails(){
        fetch(env.API_URL + '/users/' + this.props.match.params.userName + '/details')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    user: this.parseUser(data.response)
                })
            })
            .catch(console.log);
    }

    fetchRepositories(){
        fetch(env.API_URL + '/users/' + this.props.match.params.userName + '/repos')
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
            <div style={style}>
                <div>
                    <h2 style = {{
                            textAlign: 'center',
                            marginTop: '3rem',
                            marginBottom: 0,
                    }}>
                        { this.state.user.login }'s Profile
                    </h2>
                    <div className = {'card user-details '}>
                        <div className = {'profile-url'}><h3>URL: <a href = { this.state.user.html_url }>{this.state.user.html_url}</a></h3></div>
                        <div className = {'flex-group'}>
                            <div className = {'user-id'}>ID: { this.state.user.id }</div>
                            <div className = {'created-at'}>Created at: { this.state.user.created_at }</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h3
                            style = {{
                                marginTop: '2rem'
                            }}
                        >
                            Public repositories
                        </h3>
                    </div>
                    <div>
                        { this.state.repos.map(repo => <RepoListItem key = {repo.id} repo = {repo}/>) }
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(UserDetails);
