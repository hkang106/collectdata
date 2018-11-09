import { handleActions, createAction } from "redux-actions";

//actions
export const SEND_MESSAGE = "SEND_MESSAGE";
export const SET_BOT_RESPONSE = "SET_BOT_RESPONSE";
export const SET_OPTION = "SET_OPTION";

//action creators
export const sendMessage = createAction(SEND_MESSAGE);
export const setBotResponse = createAction(SET_BOT_RESPONSE);
export const setOption = createAction(SET_OPTION);

//state
const initialState = {
  messages: [],
  bot_responses: [],
  options: [],
  bot_cids: [],
  opt_cids: []
};

// API action functions
function fetchBotMessage(cid, user_utt) {
  return (dispatch, getState) => {
    fetch(
      "https://dialogue-data-character-backend.themusio.com/api/chat/jp/si/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          prev_bot_cid: null,
          user_utt: "hello"
        })
      }
    )
      .then(response => response.json())
      .then(json => {
        console.log("json: ", json);
        const {
          bot_response: { body, comment_id },
          next_options
        } = json;
        //next_options.map(option => {
        //const { body, comment_id } = option;
        //console.log("body of next options: ", body);
        //console.log("comment id of next optoins: ", comment_id);
        //});
        //console.log("body of bot_response: ", body);
        //console.log("comment_id of bot_response: ", comment_id);

        dispatch(sendMessage(user_utt));
        dispatch(setBotResponse({ comment_id, body }));
        dispatch(setOption({ next_options }));

        //return json;
      })
      .catch(err => console.log(err));
  };
}

export default handleActions(
  {
    [SEND_MESSAGE]: (state, action) => {
      const { payload } = action;
      console.log("messages in redux: ", state);
      return { ...state, messages: [...state.messages, payload] };
    },
    [SET_BOT_RESPONSE]: (state, action) => {
      const {
        payload: { body, comment_id }
      } = action;
      //console.log("body in botResp: ", body);
      //console.log("comment id in botResp: ", comment_id);

      return {
        ...state,
        bot_cids: [...state.bot_cids, comment_id],
        bot_responses: [...state.bot_responses, body]
      };
    },
    [SET_OPTION]: (state, action) => {
      const {
        payload: { next_options }
      } = action;
      console.log("next_options in SetOpt: ", next_options);
      let ids = [];
      let opts = [];
      next_options.map(option => {
        ids.push(option.comment_id);
        opts.push(option.body);
        console.log("option~~~~!!:", option);
      });
      return {
        ...state,
        options: [...state.options, [...opts]],
        opt_cids: [...state.opt_cids, [...ids]]
      };
    }
  },
  initialState
);

const actionCreators = {
  sendMessage,
  fetchBotMessage
};

export { actionCreators };
