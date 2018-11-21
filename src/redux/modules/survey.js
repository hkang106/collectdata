//import { Map, List } from "immutable";
import { handleActions, createAction } from "redux-actions";
import { push } from "react-router-redux";
//actions
export const CLICK_RANDOMIZE = "CLICK_RANDOMIZE";
export const HANDLE_SWITCH = "HANDLE_SWITCH";
export const CLICK_SUBMIT = "CLICK_SUBMIT";
//action creators
export const clickRandomize = createAction(CLICK_RANDOMIZE);
export const handleSwitch = createAction(HANDLE_SWITCH);
export const clickSubmit = createAction(CLICK_SUBMIT);

const initialState = {
  dq1: false,
  dq2: false,
  dq3: false,
  dq4: false,
  dq5: false,
  dq6: false,
  dq7: false,
  dq8: false,
  dq9: false,
  dq10: false,
  dq11: false,
  dq12: false,
  dq13: false,
  dq14: false,
  dq15: false,
  uq1: false,
  uq2: false,
  uq3: false,
  uq4: false,
  uq5: false,
  uq6: false,
  uq7: false,
  uq8: false,
  uq9: false,
  uq10: false,
  uq11: false,
  uq12: false,
  uq13: false,
  uq14: false,
  uq15: false
};

export default handleActions(
  {
    [CLICK_RANDOMIZE]: (state, action) => {
      return {
        ...state,
        dq1: Math.random() >= 0.5,
        dq2: Math.random() >= 0.5,
        dq3: Math.random() >= 0.5,
        dq4: Math.random() >= 0.5,
        dq5: Math.random() >= 0.5,
        dq6: Math.random() >= 0.5,
        dq7: Math.random() >= 0.5,
        dq8: Math.random() >= 0.5,
        dq9: Math.random() >= 0.5,
        dq10: Math.random() >= 0.5,
        dq11: Math.random() >= 0.5,
        dq12: Math.random() >= 0.5,
        dq13: Math.random() >= 0.5,
        dq14: Math.random() >= 0.5,
        dq15: Math.random() >= 0.5,
        uq1: Math.random() >= 0.5,
        uq2: Math.random() >= 0.5,
        uq3: Math.random() >= 0.5,
        uq4: Math.random() >= 0.5,
        uq5: Math.random() >= 0.5,
        uq6: Math.random() >= 0.5,
        uq7: Math.random() >= 0.5,
        uq8: Math.random() >= 0.5,
        uq9: Math.random() >= 0.5,
        uq10: Math.random() >= 0.5,
        uq11: Math.random() >= 0.5,
        uq12: Math.random() >= 0.5,
        uq13: Math.random() >= 0.5,
        uq14: Math.random() >= 0.5,
        uq15: Math.random() >= 0.5
      };
    },

    [HANDLE_SWITCH]: (state, action) => {
      const {
        payload: { event, question }
      } = action;

      //return state;
      return { ...state, [question]: event.target.checked };
    }
  },
  initialState
);

const actionCreators = {
  clickRandomize,
  handleSwitch,
  clickSubmit
};

export { actionCreators };
