import React, { Component } from 'react';

class Search extends Component{
    render() {
        return (
            <div className="container center search">
                <div className="search-body">
                <h3 className="main-color">Git-Search</h3>
                <p className="sec-color">Search a profile</p>
                <form>
                    <input type="text"/>
                    <button className="btn-small orange lighten-3 black-text">SEARCH</button>
                </form>
                </div>
            </div>
        )
    }
}

export default Search