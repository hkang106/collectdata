import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Container from "./container";
import { actionCreators as userActions } from "redux/modules/user";

export default connect(
  state => ({
    user: state.user
  }),
  dispatch => ({
    UserActions: bindActionCreators(userActions, dispatch)
  })
)(Container);
