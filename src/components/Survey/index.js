import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Container from "./container";
import { actionCreators as surveyActions } from "redux/modules/survey";

export default connect(
  state => ({
    survey: state.survey
  }),
  dispatch => ({
    SurveyActions: bindActionCreators(surveyActions, dispatch)
  })
)(Container);
