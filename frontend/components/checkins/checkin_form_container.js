import { connect } from "react-redux";
import CheckinForm from "./checkin_form";
import { closeModal } from "../../actions/modal_actions";
import { createCheckin } from "../../actions/checkin_actions";

const msp = state => ({
    userId: state.session.currentUserId
})

const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    // createCheckin: (id, form) => dispatch(createCheckin(id, form))
    createCheckin: (checkin) => dispatch(createCheckin(checkin))
})

export default connect(msp, mdp)(CheckinForm);