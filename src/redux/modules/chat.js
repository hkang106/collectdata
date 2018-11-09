import { handleActions, createAction } from "redux-actions";

//actions
export const SEND_MESSAGE = "SEND_MESSAGE";

//action creators
export const sendMessage = createAction(SEND_MESSAGE);

const initialState = {
  messages: []
};

// API action functions
function fetchBotMessage() {
  return (dispatch, getState) => {
    fetch("");
  };
}

export default handleActions(
  {
    [SEND_MESSAGE]: (state, action) => {
      const { payload } = action;

      return { messages: [...state.messages, payload] };
    }
  },
  initialState
);

const actionCreators = {
  sendMessage
};

export { actionCreators };
