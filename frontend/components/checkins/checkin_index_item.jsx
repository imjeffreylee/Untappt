import React from "react";
import { Link } from "react-router-dom";

class CheckinIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const user = this.props.user;
        const drink = this.props.drink;
        const brewery = this.props.brewery;
        
        return (
            <>
                <div className="index-item-container">
                    <div className="checkin-item-img-holder">
                        <img src={window.beerProfile} alt="profile" />
                    </div>
                    <div className="checkin-info-holder">
                        <div className="top-part">
                            <p>
                                <Link to={`/users/${user.id}`}>{user.first_name} {user.last_name} </Link>
                                is drinking a
                                <a className="beer"> Beer </a>
                                by
                                <a className="brewery"> Brewery</a>
                            </p>
                            <div className="comment">
                                <p className="comment-text">Good!</p>
                                <div className="caps"></div>
                            </div>
                        </div>
                        <div className="bottom-part">
                            <div className="comment-toast">
                                <a href="#" className="comment-btn btn">
                                    <img src={window.comment_icon} alt="comment_icon"/>
                                    Comment
                                </a>
                                <a href="#" className="toast-btn btn">
                                    <img src={window.toast_icon} alt="comment_icon" />
                                    Toast
                                </a>
                            </div>
                            <div className="item-footer">
                                <a href="#" className="post-date item-footer-link">28 Nov 19</a>
                                <a href="#" className="post-detail item-footer-link">View Detailed Check-in</a>
                                <a href="#" className="delete-post item-footer-link">Delete Check-in</a>
                            </div>
                        </div>
                        <div className="toast-list"></div>
                    </div>
                </div>
            </>
        )
    }
}

export default CheckinIndexItem;