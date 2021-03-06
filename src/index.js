import React from "react";
import "./index.css";
import App from "components/App";

import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import store, { history } from "redux/configureStore";
import ReactDOM from "react-dom";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,

  document.getElementById("root")
);
