import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';


class UserDetails extends Component {

    constructor(props){
        super(props);
        this.state = {
            user: {
                name: ''
            }
        }

    }

    didComponentMount(){
        console.log('lonely day');
        this.fetchDetails();
    }

    fetchDetails(){
        fetch('http://localhost:3000/users/' + this.props.match.params.userName + '/details')
            .then(res => res.json())
            .then(data => { this.setState(
                {user: data.response})
            })
            .catch(console.log);
    }

    render() {
        return (
            <div>{this.state.user.name}</div>
        )
    }
}

export default UserDetails;
