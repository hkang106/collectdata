import { Map, List } from "immutable";
import { handleActions, createAction } from "redux-actions";

export const CLICK_SUBMIT = "CLICK_SUBMIT";

export const clickSubmit = createAction(CLICK_SUBMIT);

const initialState = List([
  Map({
    id: 1,
    status: null
  }),
  Map({
    id: 2,
    status: null
  }),
  Map({
    id: 3,
    status: null
  }),
  Map({
    id: 4,
    status: null
  }),
  Map({
    id: 5,
    status: null
  }),
  Map({
    id: 6,
    status: null
  }),
  Map({
    id: 7,
    status: null
  }),
  Map({
    id: 8,
    status: null
  }),
  Map({
    id: 9,
    status: null
  }),
  Map({
    id: 10,
    status: null
  }),
  Map({
    id: 11,
    status: null
  }),
  Map({
    id: 12,
    status: null
  }),
  Map({
    id: 13,
    status: null
  }),
  Map({
    id: 14,
    status: null
  }),
  Map({
    id: 15,
    status: null
  })
]);

export default handleActions(
  {
    [CLICK_SUBMIT]: (state, action) => {
      //const index = state.findIndex(item => item.get("id") === id);
    }
  },
  initialState
);

const actionCreators = {};

export { actionCreators };
