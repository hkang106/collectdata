import React from "react";
import { Route, Switch } from "react-router-dom";
import Validation from "components/Validation";
import SurveyForm from "components/SurveyForm";
import Buttons from "components/Buttons";
import LearnersChat from "components/LearnersChat";
import ChatButton from "components/ChatButton";
import ProgressRatio from "components/Progress";
import { withRouter } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={InitialPage} />
        <Route path="/submit" component={SubmitPage} />
      </Switch>
    );
  }
}
const InitialPage = ({ history, match, location }) => {
  console.log("history: ", history);
  console.log("match: ", match);
  console.log("location: ", location);
  return (
    <div>
      <ProgressRatio />
      <Container>
        <Validation />
        <SurveyForm />
        <Buttons />
        <LearnersChat />
        <ChatButton routeHistory={history} />
      </Container>
    </div>
  );
};
const SubmitPage = () => {
  console.log("submit page!!");
  return (
    <div>
      <h3>Submit page</h3>
    </div>
  );
};
export default withRouter(App);
