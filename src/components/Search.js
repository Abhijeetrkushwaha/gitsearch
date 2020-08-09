import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'

class Search extends Component{
    state = {
        name: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })

    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.props);
        // adding data to state
        if(this.state.name) {
            // this.props.addName(this.state.name);
            axios({
                url: `https://api.github.com/users/${this.state.name}`,
                data:{
                    client_id:process.env.REACT_APP_CLIENT_ID,
                    client_secret:process.env.REACT_APP_CLIENT_SECRET
                }
            }).then((res) => { 
                    this.props.history.push('/' + this.state.name);
                    this.props.addProfile(res)
                axios({
                    url: `https://api.github.com/users/${this.state.name}/repos`,
                    data:{
                        client_id:process.env.REACT_APP_CLIENT_ID,
                        client_secret:process.env.REACT_APP_CLIENT_SECRET,
                    }
                }).then((repository) => {
                    // console.log(repository)
                    this.props.addRepo(repository)
                })
                
            }).catch((err) => {
                alert('User not found', err);
                document.querySelector('#name').value = ''
            })
        }
    }

    render() {
        return (
            <div className="container search">
                <div className="search-body">
                <h3 className="main-color center">Git-Search</h3>
                <p className="sec-color center">Search User</p>
                </div>
                <form className="container center" onSubmit={this.handleSubmit}>
                    <input type="text" id="name" onChange={this.handleChange}/>
                    <button id="value" className="btn-small orange lighten-3 black-text">SEARCH</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addProfile: (profile) => { dispatch({ type: 'ADD_PROFILE', profile:profile })},
        addRepo: (repo) => { dispatch({ type: 'ADD_REPO', repo:repo })}
    }
}

export default connect(null, mapDispatchToProps)(Search)