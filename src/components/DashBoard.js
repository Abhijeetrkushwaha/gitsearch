import React from 'react';
// import Model from '../images/model.jpg';
import Repository from './Repository';
import Footer from './Footer';
import { connect } from 'react-redux'

function DashBoard({ profileData, repoData }) {
        // console.log(profileData.data);
        // console.log(profileData.data);
        // console.log(repoData.data);
            // let allRepo = 
            // console.log(profileData);

            var profile = profileData && repoData ? (
                <div>
                <div className="container dashboard center">
                <div className="profile">
                    <div className="img-div center">
                        <img className="img" src={profileData.data.avatar_url} alt="profile-pic" />
                    </div>
                    <div className="title center">
                        <h4 className="white-text">{profileData.data.name}</h4>
                        <a href={profileData.data.html_url} target="_blank" ><h5 className="orange-text text-lighten-2">@{profileData.data.login}</h5></a>
                    </div>
                    <div className="extra-info">
                        { profileData.data.location ? (<p className="white-text">Location: {profileData.data.location} </p>) : null }
                    </div>
                    <div className="follo-er-ing">
                        <div className="follower column">
                            <p className="num white-text">{profileData.data.followers}</p>
                            <p className="text white-text">FOLLOWER</p>
                        </div>
                        <div className="following column">
                            <p className="num white-text">{profileData.data.following}</p>
                            <p className="text white-text">FOLLOWING</p>
                        </div>
                        <div className="repo column">
                            <p className="num white-text">{profileData.data.public_repos}</p>
                            <p className="text white-text">REPOSITORY</p>
                        </div>
                    </div>
                </div>
                <div className="repo-num">
                    <h4>Repositories</h4>
                </div>
                <div className="row">
                    {/* {allRepo} */}
                    {
                        repoData.data.length ? (
                            repoData.data.map((item, id) => {
                                return <Repository item={item} key={id} />
                            })
                        ) : (
                            <h2>{profileData.data.name} has no Repository</h2>
                           )
                    }
                </div>
            </div>
            <Footer />
            </div>
            ) : (
                <div className="center white-text">
                    <h4>Loading...</h4>
                </div>
            )
        

    return (
        <div>            
            {profile}
        </div>
        )
}

const mapStateToProps = (state) => {
    return {
        repoData: state.repoData,
        profileData: state.profileData,
    }
}

export default connect(mapStateToProps)(DashBoard)
