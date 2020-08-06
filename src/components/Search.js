import React, { Component } from 'react';

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
        this.props.history.push('/' + this.state.name)
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
                    <button className="btn-small orange lighten-3 black-text">SEARCH</button>
                </form>
            </div>
        )
    }
}

export default Search