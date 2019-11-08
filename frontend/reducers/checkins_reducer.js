import {
    RECEIVE_CHECKIN,
    RECEIVE_CHECKINS,
    DELETE_CHECKIN
} from "../actions/checkin_actions";

import { merge } from "lodash/merge";

const CheckinsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CHECKIN:
            return merge({}, state, {
                [action.checkin.id]: action.checkin
            })
    
        case RECEIVE_CHECKINS:
            return action.checkins;

        case DELETE_CHECKIN:
            const newSatet = merge({}, state);
            delete newSatet[action.checkinId];
            return newState;

        default:
            return state;
    }
}

export default CheckinsReducer;