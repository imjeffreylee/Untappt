import React from "react";
import CheckinIndexItem from "./checkin_index_item";
import { connect } from "react-redux";
import { deleteCheckin } from "../../actions/checkin_actions"


class CheckinIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const checkinsArr = Object.values(this.props.checkins);
        const allCheckins = [];
        for (let i = checkinsArr.length - 1; i >= 0; i--) {
            const checkin = checkinsArr[i];
            const user = checkin.checkin.user;
            const checkinDrink = checkin.checkin.drink;
            const checkinBrewery = checkin.checkin.brewery;
            const checkinReview = checkin.checkin.review;
            const checkinRating = checkin.checkin.rating;
            const checkinDayAndTime = checkin.checkin.created_at;

            allCheckins.push(
                <CheckinIndexItem
                    key={checkin.checkin.id}
                    id={checkin.checkin.id}
                    user={user}
                    drink={checkinDrink}
                    brewery={checkinBrewery}
                    review={checkinReview}
                    rating={checkinRating}
                    dayAndTime={checkinDayAndTime}
                    currentUserId={this.props.currentUserId}
                    deleteCheckin={this.props.deleteCheckin}
                />
            )
            
        }

        return (
            <>
                {allCheckins}
            </>
        );
    }
}

const msp = state => ({
    currentUserId: state.session.id
})

const mdp = dispatch => ({
    deleteCheckin: id => dispatch(deleteCheckin(id))
})

export default connect(msp, mdp)(CheckinIndex);