import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Container from "./container";
import { actionCreators as surveyActions } from "redux/modules/survey";

export default connect(
  (state, ownProps) => ({
    survey: state.survey,
    idx: ownProps.idx
  }),
  dispatch => ({
    SurveyActions: bindActionCreators(surveyActions, dispatch)
  })
)(Container);
/*


*/
