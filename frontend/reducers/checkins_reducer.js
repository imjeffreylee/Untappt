import {
    RECEIVE_CHECKIN,
    RECEIVE_CHECKINS,
    REMOVE_CHECKIN
} from "../actions/checkin_actions";
import { merge } from "lodash/merge";

const CheckinsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CHECKIN:
            return merge({}, state, {
                [action.checkin.id]: action.checkin
            });
    
        case RECEIVE_CHECKINS:
            return action.checkins;

        case REMOVE_CHECKIN:
            let newState = Object.assign({}, state);
            // let newState = merge({}, state);
            delete newState[action.checkinId];
            return newState;

        default:
            return state;
    }
}

export default CheckinsReducer;