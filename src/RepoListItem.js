import React, { Component } from 'react';
import './repo_list_item.css';

class RepoListItem extends Component {
    render(){
        return <div>
            <div className = {'card'}>
                <div className = {'repo-id'}>{this.props.repo.id}</div>
                <div className = {'repo-name'}>{this.props.repo.name}</div>
                <div className = {'repo-url'}>
                    <a href = {this.props.repo.html_url}>{this.props.repo.html_url}</a>
                </div>
            </div>
        </div>
    }
}

export default RepoListItem;
