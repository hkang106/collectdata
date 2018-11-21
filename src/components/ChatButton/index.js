import { push } from "react-router-redux";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Container from "./container";
import { actionCreators as surveyActions } from "redux/modules/survey";

export default connect(
  (state, ownProps) => ({
    survey: state.survey,
    routeHistory: ownProps.routeHistory
  }),
  (dispatch, ownProps) => ({
    surveyActions: bindActionCreators(surveyActions, dispatch)
  })
)(Container);
