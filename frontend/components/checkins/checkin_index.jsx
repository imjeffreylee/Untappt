import React from "react";
import CheckinIndexItem from "./checkin_index_item";

class CheckinIndex extends React.Component {
    constructor(props) {
        super(props);
        debugger
    }
    
    render() {
        
        const allCheckins = this.props.checkinUser.checkins.map((checkin, i) => {
            const user = this.props.checkinUser
            const drinkId = this.props.checkinUser.checkins[i].id.drink_id;
            debugger
            return (
                <CheckinIndexItem
                    key={checkin.id.id}
                    user={user}
                    drinkId={drinkId}
                />
            )
        })

        return (
            <>
                {allCheckins}
            </>
        );
    }
}

export default CheckinIndex;
