import { RECEIVE_CHECKIN, RECEIVE_CHECKINS } from "../actions/checkin_actions";
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

        default:
            return state;
    }
}