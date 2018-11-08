import { handleActions, createAction } from "redux-actions";

//actions
export const SEND_MESSAGE = "SEND_MESSAGE";

//action creators
export const sendMessage = createAction(SEND_MESSAGE);

const initialState = {
  messages: []
};

export default handleActions(
  {
    [SEND_MESSAGE]: (state, action) => {
      const { payload } = action;
      console.log("action: ", action);
      console.log("previous message:", state.messages);
      console.log("new message:", payload);
      return { messages: [...state.messages, payload] };
    }
  },
  initialState
);

const actionCreators = {
  sendMessage
};

export { actionCreators };
