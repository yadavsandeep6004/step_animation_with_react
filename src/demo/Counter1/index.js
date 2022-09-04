import { useReducer } from "react";

const Counter1 = () => {
  const initialState = {
    count: 0
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return {
          ...state,
          count: state.count + 1
        };
      case "REMOVE":
        return {
          ...state,
          count: state.count - 1
        };
      case "RESET":
        return initialState;

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1> count : {state.count} </h1>
      <button onClick={() => dispatch({ type: "ADD" })}>Increment</button>
      <button onClick={() => dispatch({ type: "REMOVE" })}>Dicrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};

export default Counter1;
