import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Container from "./container";
import { actionCreators as chatActions } from "redux/modules/chat";

export default connect(
  state => ({
    chat: state.chat
  }),
  dispatch => ({
    chatActions: bindActionCreators(chatActions, dispatch)
  })
)(Container);
/*


*/
