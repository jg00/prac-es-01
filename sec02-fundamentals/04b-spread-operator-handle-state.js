/* Managing {} object state immutably */

function aReducer(state, action) {
  // let newState = Object.assign({}, state); // One way to make a copy
  // newState.newProperty = action.payload;
  let newState = { ...state, b: 80, newProperty: 30 };
  console.log(newState);
  console.log(state);
}

const currState = {
  a: 1,
  b: 2,
  c: 3
};

const action = {
  type: "done",
  payload: 30
};

aReducer(currState, action);
