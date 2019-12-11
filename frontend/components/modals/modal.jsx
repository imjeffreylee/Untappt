import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import CheckinFormContainer from "../checkins/checkin_form_container";

const Modal = (props) => {
    if (!props.modal) {
        return null;
    }

    return (
        <div className="modal-background" onClick={props.closeModal}>
            <div className="modal-body" onClick={e => e.stopPropagation()}>
                <CheckinFormContainer drink={props.drink} />
            </div>
        </div>
    )
}

const msp = state => {
    return {
        modal: state.ui.modal
    }
};

const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(msp, mdp)(Modal);