import { connect } from "react-redux";
import CheckinForm from "./checkin_form";
import { closeModal } from "../../actions/modal_actions";
import { createCheckin } from "../../actions/checkin_actions";

const msp = state => {
    // debugger
    return {
        userId: state.session.id
    }
}

const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    createCheckin: (checkin) => dispatch(createCheckin(checkin))
})

export default connect(msp, mdp)(CheckinForm);