import {
    RECEIVE_CHECKIN,
    RECEIVE_CHECKINS,
    REMOVE_CHECKIN
} from "../actions/checkin_actions";

import { merge } from "lodash/merge";

const CheckinsReducer = (state = {}, action) => {
    // debugger
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CHECKIN:
            return merge({}, state, {
                [action.checkin.id]: action.checkin
            });
    
        case RECEIVE_CHECKINS:
            debugger
            // return action.checkins;
            return merge({}, state, action.checkins);

        case REMOVE_CHECKIN:
            const newSatet = merge({}, state);
            delete newSatet[action.checkinId];
            return newState;

        default:
            return state;
    }
}

export default CheckinsReducer;