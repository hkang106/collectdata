import ChatButton from "./presenter";
import React from "react";
import history from "redux/configureStore";
import store from "redux/configureStore";

class Container extends React.Component {
  render() {
    const { clickSubmit, survey, user, chat, routeHistory } = this.props;
    console.log("routeHistory:", routeHistory);
    return (
      <div>
        <ChatButton handleSubmit={this._handleSubmit} />
      </div>
    );
  }

  _handleSubmit = () => {
    this.props.routeHistory.push("/submit/");
    postStateToDB(this.props.survey, this.props.user, this.props.chat);
  };
}

const postStateToDB = (survey, user, chat) => {
  const {
    dq1,
    dq2,
    dq3,
    dq4,
    dq5,
    dq6,
    dq7,
    dq8,
    dq9,
    dq10,
    dq11,
    dq12,
    dq13,
    dq14,
    dq15
  } = survey;
  const {
    uq1,
    uq2,
    uq3,
    uq4,
    uq5,
    uq6,
    uq7,
    uq8,
    uq9,
    uq10,
    uq11,
    uq12,
    uq13,
    uq14,
    uq15
  } = survey;

  let d_list = [
    dq1,
    dq2,
    dq3,
    dq4,
    dq5,
    dq6,
    dq7,
    dq8,
    dq9,
    dq10,
    dq11,
    dq12,
    dq13,
    dq14,
    dq15
  ];
  let u_list = [
    uq1,
    uq2,
    uq3,
    uq4,
    uq5,
    uq6,
    uq7,
    uq8,
    uq9,
    uq10,
    uq11,
    uq12,
    uq13,
    uq14,
    uq15
  ];

  console.log("user.username: ", user.username);
  console.log("user.password: ", user.password);
  console.log("user.email: ", user.email);
  console.log("chat.messages: ", chat.messages);
  console.log("chat.message_ids: ", chat.message_ids);
  console.log("d_list: ", d_list);
  console.log("u_list: ", u_list);

  fetch("/si/dataset/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: user.username,
      password: user.password,
      email: user.email,
      messages: chat.messages,
      message_ids: chat.message_ids,
      diagnosis_answers: d_list,
      unittest_answers: u_list
    })
  }).then(response => console.log(response));
};

export default Container;
