import React, { useReducer } from "react";
const initialState = {
  count: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    case "decrement-2":
      return { count: state.count - 2 };

    default:
      return state;
  }
};
function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>This is useReducer example</h1>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
      <button onClick={() => dispatch({ type: "decrement-2" })}>
        decrement -2
      </button>
    </div>
  );
}

export default UseReducer;
