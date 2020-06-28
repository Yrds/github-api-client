import React, { Component } from 'react';
import './repo_list_item.css';


class RepoListItem extends Component {
    render(){
        return <div>
            <div className = {'card repo-list-item box'}>
                <div className = {'vertical-line'}></div>
                <div className = {'card-content'}>
                    <h3 className = {'repo-name'}>{this.props.repo.name}</h3>
                    <h4 className = {'repo-url'}>
                        URL: <a href = {this.props.repo.html_url}> {this.props.repo.html_url}</a>
                    </h4>
                    <div className = {'repo-id'}>ID: {this.props.repo.id}</div>
                </div>
            </div>
        </div>
    }
}

export default RepoListItem;
