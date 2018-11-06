import { Map, List } from "immutable";
import { handleActions, createAction } from "redux-actions";

//actions
export const SELECT_OPTION = "SELECT_OPTION";
export const CLICK_SUBMIT = "CLICK_SUBMIT";
export const GET_CLICKED_ITEM = "GET_CLICKED_ITEM";

//action creators
export const clickSubmit = createAction(CLICK_SUBMIT);
export const selectOption = createAction(SELECT_OPTION);
export const getClickedItem = createAction(GET_CLICKED_ITEM);
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
function getClicked(index) {
  return (dispatch, getState) => {
    const { survey } = getState();
    console.log("state in getClicked: ", survey);
    const item = survey.get(index);
    console.log("item:!!!!!", item);
    dispatch(getClickedItem(item));
  };
}

export default handleActions(
  {
    [CLICK_SUBMIT]: (state, action) => {
      //const index = state.findIndex(item => item.get("id") === id);
    },
    [GET_CLICKED_ITEM]: (state, action) => {
      const { payload } = action;
      console.log("payload::------------", payload);
      return;
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
      //const index = state.findIndex(item => item.get("idx") === idx);
      console.log("idx: ", idx);
      //console.log("index: ", index);
      return state.updateIn([idx, "status"], val => value);
    }
  },
  initialState
);

const actionCreators = {
  selectOption,
  getClicked
};

export { actionCreators };
