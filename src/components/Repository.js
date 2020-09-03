import React from 'react';

function Repository({item}){
    return (
        <div className="section col s12 l6">
            <div className="card z-depth-2 height">
                <div className="card-content">
                    <span className="card-title">{item.name}</span>
                    {
                        item.description ? (
                            <p className="des">{item.description.length > 20 ? <span>{item.description.slice(0,20)}...</span> : item.description}</p>
                        ) : <p>No description</p>
                    }
                    <p className="star-fork"><span className="stars">{item.stargazers_count} Stars</span><span>{item.forks_count} Forks</span></p>
                    <a href={item.html_url} target="_blank" className="btn-small grey darken-3 orange-text text-lighten-2">Visit</a>
                </div>
            </div>
        </div>
    )
}

export default Repository;