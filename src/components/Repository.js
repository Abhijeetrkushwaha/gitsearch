import React from 'react';

function Repository({item}){
    return (
        <div className="section col s12 l6">
            <div className="card z-depth-2">
                <div className="card-content">
                    <span className="card-title">{item.name}</span>
                    <p className="des">{item.description}</p>
                    <p className="star-fork"><span className="stars">{item.stargazers_count} Stars</span><span>{item.forks_count} Forks</span></p>
                    <a href={item.html_url} target="_blank" className="btn-small grey darken-3 orange-text text-lighten-2">Visit</a>
                </div>
            </div>
        </div>
    )
}

export default Repository;