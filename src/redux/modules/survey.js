import { Map, List } from "immutable";
import { handleActions, createAction } from "redux-actions";

//actions
export const CLICK_RANDOMIZE = "CLICK_RANDOMIZE";
export const HANDLE_SWITCH = "HANDLE_SWITCH";
//action creators
export const clickRandomize = createAction(CLICK_RANDOMIZE);
export const handleSwitch = createAction(HANDLE_SWITCH);

const initialState = {
  dq1: null,
  dq2: null,
  dq3: null,
  dq4: null,
  dq5: null,
  dq6: null,
  dq7: null,
  dq8: null,
  dq9: null,
  dq10: null,
  dq11: null,
  dq12: null,
  dq13: null,
  dq14: null,
  dq15: null,
  uq1: null,
  uq2: null,
  uq3: null,
  uq4: null,
  uq5: null,
  uq6: null,
  uq7: null,
  uq8: null,
  uq9: null,
  uq10: null,
  uq11: null,
  uq12: null,
  uq13: null,
  uq14: null,
  uq15: null
};

export default handleActions(
  {
    [CLICK_RANDOMIZE]: (state, action) => {
      alert("check");
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
    }
  },
  initialState
);

const actionCreators = {
  clickRandomize,
  handleSwitch
};

export { actionCreators };
