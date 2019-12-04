import React from "react";
import CheckinIndexItem from "./checkin_index_item";

class CheckinIndex extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        debugger
        const allCheckins = Object.values(this.props.checkins).map((checkin, i) => {
            const user = this.props.checkinUser
            if (i > 0) {
                const drink = checkin.drink
                const brewery = checkin.brewery
                
                return (
                    <CheckinIndexItem
                        key={checkin.checkin.id}
                        user={user}
                        drink={drink}
                        brewery={brewery}
                    />
                )
            }
        })

        return (
            <>
                {allCheckins}
            </>
        );
    }
}

export default CheckinIndex;
