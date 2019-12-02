import React from "react"

class CheckinIndexItem extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {

        // }
    }

    render() {
        return (
            <>
                <div className="index-item-container">
                    <div className="checkin-item-img-holder">
                        <img src={window.beerProfile} alt="profile" />
                    </div>
                    <div className="checkin-info-holder">
                        <div className="top-part">
                            <p>
                                <a className="fname">FirstName LastName </a>
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
                                <div className="comment-btn btn">
                                    <a href="#">Comment</a>
                                </div>
                                <div className="toast-btn btn">
                                    <a href="#">Toast</a>
                                </div>
                            </div>
                        </div>
                        <div className="item-footer">
                            <a href="">checkin time</a>
                            <a href="">View Detailed Check-in</a>
                            <a href="">Delete Check-in</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default CheckinIndexItem;