import React from "react";
import CheckinIndexItem from "./checkin_index_item";

class CheckinIndex extends React.Component {


    render() {
        const allCheckins = this.props.checkins.map(checkin => {
            return (
                <CheckinIndexItem
                    key={checkin.id}
                    checkin={checkin}
                    checkinUser={this.props.users[checkin.user_id]}
                    checkinDrink={this.props.drinks[checkin.drink_id]}
                    checkinBrewery={this.props.breweries[checkin.breweryId.id]}
                    likeCheckin={this.props.likeCheckin}
                    dislikeCheckin={this.props.dislikeCheckin}
                    createComment={this.props.createComment}
                    deleteComment={this.props.deleteComment}
                    users={this.props.users}
                />
            )
        })

        return (
            <>
                <div className="checkin-feeds">
                    <CheckinIndexItem />
                </div>
            </>
        );
    }
}

export default CheckinIndex;
