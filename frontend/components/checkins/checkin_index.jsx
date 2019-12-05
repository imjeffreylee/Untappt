import React from "react";
import CheckinIndexItem from "./checkin_index_item";

class CheckinIndex extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        debugger
        const checkinsArr = Object.values(this.props.checkins);
        const allCheckins = checkinsArr.map((checkin, i) => {
            const user = this.props.checkinUser
            // if (i > 0) {
                const checkinDrink = checkin.checkin.drink
                const checkinBrewery = checkin.checkin.brewery
                const checkinReview = checkin.checkin.review
                debugger
                return (
                    <CheckinIndexItem
                        key={checkin.checkin.id}
                        user={user}
                        drink={checkinDrink}
                        brewery={checkinBrewery}
                        review={checkinReview}
                    />
                )
            // }
        })

        return (
            <>
                {allCheckins}
            </>
        );
    }
}

export default CheckinIndex;
