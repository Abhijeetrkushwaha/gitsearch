import React from 'react';
import Model from '../images/model.jpg';
import Repository from './Repository';

function DashBoard() {
    return (
        <div className="container dashboard center">
            <div className="profile">
                <div className="img-div center">
                    <img className="img" src={Model} alt="profile-pic" />
                </div>
                <div className="title center">
                    <h4 className="white-text">AbhijeetKushwaha</h4>
                    <h5 className="orange-text text-lighten-2">@Abhijeetrkushwaha</h5>
                </div>
                <div className="extra-info">
                    <p>Location: Mumbai,India</p>
                </div>
                <div className="follo-er-ing">
                    <div className="repo column">
                        <p className="num white-text">18</p>
                        <p className="text white-text">REPOSITORY</p>
                    </div>
                    <div className="follower column">
                        <p className="num white-text">2</p>
                        <p className="text white-text">FOLLOWER</p>
                    </div>
                    <div className="following column">
                        <p className="num white-text">6</p>
                        <p className="text white-text">FOLLOWING</p>
                    </div>
                </div>
            </div>
            <div className="repo-num">
                <h4>Repository</h4>
            </div>
            <Repository />
            <Repository />
            <Repository />
            <Repository />
        </div>
    )
}

export default DashBoard;