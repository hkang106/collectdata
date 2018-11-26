import { Map, List } from "immutable";
import { handleActions, createAction } from "redux-actions";

export const CHECK_USER = "CHECK_USER";
export const ADD_USER = "ADD_USER";
export const CLICK_SIGNUP = "CLICK_SIGNUP";

export const checkUser = createAction(CHECK_USER);
export const addUser = createAction(ADD_USER);
export const clickSignup = createAction(CLICK_SIGNUP);

// API actions
function signupUser(username, email, password) {
  return (dispatch, getState) => {
    fetch("https://dialogue-data-character-backend.themusio.com/api/user/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password,
        email: email,
        language: "EN"
      })
    })
      .then(function(response) {
        if (response.status === 201) {
          alert("Successfully signed up");
          return response.json();
        } else if (response.status === 400) {
          alert("Signup failed.");
        }
      })
      .then(json => {
        if (json) {
          dispatch(clickSignup({ email, username, password }));
          console.log("json: ", json);
        }
      })
      .catch(err => console.log("error: ", err));
  };
}
function fetchValidUser(username) {
  return (dispatch, getState) => {
    fetch(`http://13.231.41.249/api/user-validation/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        birth: "2000-09-01"
      })
    })
      .then(response => response.json())
      .then(json => {
        if (json.status === "login") {
          const text = "this is an existing user.";
          dispatch(checkUser({ json, text }));
        } else if (json.status === "signup") {
          const text = "this user has just been signed up.";
          dispatch(checkUser({ json, text }));
        } else {
          const text =
            "[none status] check fetchValidUser json response. none is in status response";
          dispatch(checkUser({ json, text }));
        }
      })
      .catch(err => console.log(err));
  };
}

const initialState = List([
  Map({
    id: 0,
    username: "",
    status: "",
    survey: "",
    text: ""
  })
]);

export default handleActions(
  {
    [CHECK_USER]: (state, action) => {
      console.log("action:", action);
      const {
        payload: {
          json: { status }
        }
      } = action;
      const {
        payload: {
          json: {
            user: { id }
          }
        }
      } = action;

      const {
        payload: { text }
      } = action;

      /* 
      const {
        payload: { text }
      } = action;
      */
      alert(text);
      const index = state.findIndex(item => item.get("id") === id);
      state.updateIn([index, "text"], val => text);

      return state.updateIn([index, "status"], val => status);
    },

    [CLICK_SIGNUP]: (state, action) => {
      const {
        payload: { username, password, email }
      } = action;

      return { ...state, email: email, username: username, password: password };
    }
  },
  initialState
);

const actionCreators = {
  fetchValidUser,
  signupUser
};

export { actionCreators };
