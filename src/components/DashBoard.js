import React from 'react';
import Model from '../images/model.jpg';
import Repository from './Repository';
import Footer from './Footer';
import { connect } from 'react-redux'

function DashBoard({ name, history }) {

    let userPage = name === 'abhijeetkwh' ? (
        <div>
            <div className="container dashboard center">
            <div className="profile">
                <div className="img-div center">
                    <img className="img" src={Model} alt="profile-pic" />
                </div>
                <div className="title center">
                    <h4 className="white-text">AbhijeetKushwaha</h4>
                    <h5 className="orange-text text-lighten-2">@{name}</h5>
                </div>
                <div className="extra-info">
                    <p>Location: Mumbai,India</p>
                </div>
                <div className="follo-er-ing">
                    <div className="follower column">
                        <p className="num white-text">2</p>
                        <p className="text white-text">FOLLOWER</p>
                    </div>
                    <div className="following column">
                        <p className="num white-text">6</p>
                        <p className="text white-text">FOLLOWING</p>
                    </div>
                    <div className="repo column">
                        <p className="num white-text">18</p>
                        <p className="text white-text">REPOSITORY</p>
                    </div>
                </div>
            </div>
            <div className="repo-num">
                <h4>Repositories</h4>
            </div>
            <div className="row">
                <Repository />
                <Repository />
                <Repository />
                <Repository />
            </div>
        </div>
        <Footer />
        </div>
    ) : (
        <div className="container center">
            <h2 className="white-text">Hey Folk!</h2>
            <p className="orange-text">User not found</p>
            <button className="back-btn orange lighten-3" onClick={() => { history.push('/')}}>Go back</button>
        </div>
    )
    return (
       <div>            
            {userPage}
       </div>

    )
}

const mapStateToProps = (state) => {
    return {
        name: state.name,
    }
}

export default connect(mapStateToProps)(DashBoard)