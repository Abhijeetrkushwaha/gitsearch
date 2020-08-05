import React, { Component } from 'react';

class Search extends Component{
    render() {
        return (
            <div className="container search">
                <div className="search-body">
                <h3 className="main-color center">Git-Search</h3>
                <p className="sec-color center">Search a profile</p>
                </div>
                <form className="container center">
                    <input type="text"/>
                    <button className="btn-small orange lighten-3 black-text">SEARCH</button>
                </form>
            </div>
        )
    }
}

export default Search