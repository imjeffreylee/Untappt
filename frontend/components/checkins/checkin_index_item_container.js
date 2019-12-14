import CheckinIndexItem from "./checkin_index_item";
import { connect } from "react-redux";
import { deleteCheckin } from "../../actions/checkin_actions";

const msp = state => ({
    
})

const mdp = dispatch => ({
    deleteCheckin: id => dispatch(deleteCheckin(id))
})

export default connect(msp, mdp)(CheckinIndexItem);