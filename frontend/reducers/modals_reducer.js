import { launchModal, closeModal } from "../actions/modal_actions";

const modalReducer = (state = null, action) => {
    Object.freeze(state);
    switch (action.type) {
        case LAUNCH_MODAL:
            return action.modal;

        case CLOSE_MODAL:
            return null;

        default:
            return state;
    }
}

export default modalReducer;