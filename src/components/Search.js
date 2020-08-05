import React, { Component } from 'react';

class Search extends Component{

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.props);
        this.props.history.push('/user')
    }

    render() {
        return (
            <div className="container search">
                <div className="search-body">
                <h3 className="main-color center">Git-Search</h3>
                <p className="sec-color center">Search User</p>
                </div>
                <form className="container center" onSubmit={this.handleSubmit}>
                    <input type="text"/>
                    <button className="btn-small orange lighten-3 black-text">SEARCH</button>
                </form>
            </div>
        )
    }
}

export default Search