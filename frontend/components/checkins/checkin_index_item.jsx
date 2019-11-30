class CheckinIndexItem extends React.Component {
    

    render() {
        return (
            <>
                <div className="index-item-container">
                    <div className="img-holder">
                        <img src={window.beerProfile} alt="profile" />
                    </div>
                    <div className="checkin-info-holder">
                        <div className="top-part">
                            <p>FirstName LastName is drinking a Beer by Brewery</p>
                            <div className="comment">
                                <p className="comment-text">Good!</p>
                                <div className="caps"></div>
                            </div>
                        </div>
                        <div className="bottom-part">
                            <div className="comment-toast">
                                <div className="comment-btn">
                                    <a href="">Comment</a>
                                </div>
                                <div className="toast-btn">
                                    <a href="">Toast</a>
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