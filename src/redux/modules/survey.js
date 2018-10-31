import { Map, List } from "immutable";
import { handleActions, createAction } from "redux-actions";

export const SELECT_OPTION = "SELECT_OPTION";
export const CLICK_SUBMIT = "CLICK_SUBMIT";

export const clickSubmit = createAction(CLICK_SUBMIT);
export const selectOption = createAction(SELECT_OPTION);

const initialState = List([
  Map({
    idx: 0,
    status: null
  }),
  Map({
    idx: 1,
    status: null
  }),
  Map({
    idx: 2,
    status: null
  }),
  Map({
    idx: 3,
    status: null
  }),
  Map({
    idx: 4,
    status: null
  }),
  Map({
    idx: 5,
    status: null
  }),
  Map({
    idx: 6,
    status: null
  }),
  Map({
    idx: 7,
    status: null
  }),
  Map({
    idx: 8,
    status: null
  }),
  Map({
    idx: 9,
    status: null
  }),
  Map({
    idx: 10,
    status: null
  }),
  Map({
    idx: 11,
    status: null
  }),
  Map({
    idx: 12,
    status: null
  }),
  Map({
    idx: 13,
    status: null
  }),
  Map({
    idx: 14,
    status: null
  })
]);

export default handleActions(
  {
    [CLICK_SUBMIT]: (state, action) => {
      //const index = state.findIndex(item => item.get("id") === id);
    },
    [SELECT_OPTION]: (state, action) => {
      // action's arg1: true, falue
      // action's arg2: question idx
      console.log("action in redux: ", action);
      const {
        payload: { idx }
      } = action;
      const {
        payload: {
          selectedOption: { value }
        }
      } = action;
      const index = state.findIndex(item => item.get("idx") === idx);
      console.log("index: ", index);
      console.log("idx: ", idx);
      console.log("value: ", value);
      return state.updateIn([index, "status"], val => value);
    }
  },
  initialState
);

const actionCreators = {
  selectOption
};

export { actionCreators };
