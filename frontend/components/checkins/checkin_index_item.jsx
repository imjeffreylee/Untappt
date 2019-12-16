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
        const review = this.props.review;

        let dayAndTime = this.props.dayAndTime;
        const day = dayAndTime.split("T")[0];
        const time = dayAndTime.split("T")[1].slice(0, 8);
        const timeWithoutHour = time.slice(2);
        const hour = parseInt(time.split(":")[0]);
        if (hour < 12) {
            dayAndTime = day + " " + time + " AM";
        } else {
            dayAndTime = day + " " + (hour - 12).toString() + timeWithoutHour + " PM";
        }

        const rating = this.props.rating;
        let ratingIcons;
        switch (rating) {
            case 5:
                ratingIcons = (
                    <div className="caps">
                        <i className="fas fa-beer checked"></i>&nbsp;
                        <i className="fas fa-beer checked"></i>&nbsp;
                        <i className="fas fa-beer checked"></i>&nbsp;
                        <i className="fas fa-beer checked"></i>&nbsp;
                        <i className="fas fa-beer checked"></i>
                    </div>
                )
                break;
            case 4:
                ratingIcons = (
                    <div className="caps">
                        <i className="fas fa-beer checked"></i>&nbsp;
                        <i className="fas fa-beer checked"></i>&nbsp;
                        <i className="fas fa-beer checked"></i>&nbsp;
                        <i className="fas fa-beer checked"></i>&nbsp;
                        <i className="fas fa-beer"></i>
                    </div>
                )
                break;
            case 3:
                ratingIcons = (
                    <div className="caps">
                        <i className="fas fa-beer checked"></i>&nbsp;
                        <i className="fas fa-beer checked"></i>&nbsp;
                        <i className="fas fa-beer checked"></i>&nbsp;
                        <i className="fas fa-beer"></i>&nbsp;
                        <i className="fas fa-beer"></i>
                    </div>
                )
                break;
            case 2:
                ratingIcons = (
                    <div className="caps">
                        <i className="fas fa-beer checked"></i>&nbsp;
                        <i className="fas fa-beer checked"></i>&nbsp;
                        <i className="fas fa-beer"></i>&nbsp;
                        <i className="fas fa-beer"></i>&nbsp;
                        <i className="fas fa-beer"></i>
                    </div>
                )
                break;
            case 1:
                ratingIcons = (
                    <div className="caps">
                        <i className="fas fa-beer checked"></i>&nbsp;
                        <i className="fas fa-beer"></i>&nbsp;
                        <i className="fas fa-beer"></i>&nbsp;
                        <i className="fas fa-beer"></i>&nbsp;
                        <i className="fas fa-beer"></i>
                    </div>
                )
                break;
            default:
                ratingIcons = (
                    <div className="caps">
                        <i className="fas fa-beer"></i>&nbsp;
                        <i className="fas fa-beer"></i>&nbsp;
                        <i className="fas fa-beer"></i>&nbsp;
                        <i className="fas fa-beer"></i>&nbsp;
                        <i className="fas fa-beer"></i>
                    </div>
                )
                break;
        }

        let deleteCheckin;
        if (this.props.currentUserId === user.id) {
            deleteCheckin = (
                <a
                    className="delete-post item-footer-link"
                    onClick={() => this.props.deleteCheckin(this.props.id)}
                >
                    Delete Check-in
                </a>
            )
        } else {
            deleteCheckin = (
                <div></div>
            )
        }

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
                                <Link to={`/drinks/${drink.id}`} className="beer"> {drink.drink_name} </Link>
                                by
                                <Link to={`/breweries/${brewery.id}`} className="brewery"> {brewery.brewery_name}</Link>
                            </p>
                            <div className="comment">
                                <p className="comment-text">{review}</p>
                                {ratingIcons}
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
                                <a href="#" className="post-date item-footer-link"> {dayAndTime} </a>
                                <a href="#" className="post-detail item-footer-link">View Detailed Check-in</a>
                                {deleteCheckin}
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