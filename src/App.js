import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import ListUsers from './ListUsers';
import UserDetails from './UserDetails';


class App extends Component {

    constructor(props){
        super(props);

        this.state = {users: []};
    }


    render(){
        return (
            <div>
                <Switch>
                    <Route exact path="/"> <ListUsers /> </Route>
                    <Route exact path="/:userName/details"> <UserDetails/></Route>
                </Switch>
            </div>
        );
    }

}

export default App;
