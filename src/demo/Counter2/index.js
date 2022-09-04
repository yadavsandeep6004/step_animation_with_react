import { useReducer } from "react";

const Counter2 = () => {
  const initialState = {
    num: 0,
    count: 0
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD5":
        return {
          ...state,
          num: state.num + action.value
        };

      case "REMOVE5":
        return {
          ...state,
          num: state.num - action.value
        };
      case "ADD10":
        return {
          ...state,
          count: state.count + action.value
        };

      case "REMOVE10":
        return {
          ...state,
          count: state.count - action.value
        };
      case "RESET":
        return initialState;

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  // const [count, dispatchCount] = useReducer(reducer,initialState);

  return (
    <div>
      <h1>Count1 :{state.num}</h1>
      <h1>Count2 :{state.count}</h1>
      <button onClick={() => dispatch({ type: "ADD5", value: 5 })}>
        Increment5
      </button>
      <button onClick={() => dispatch({ type: "REMOVE5", value: 5 })}>
        Dicrement5
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      <div>
        <button onClick={() => dispatch({ type: "ADD10", value: 10 })}>
          Increment5
        </button>
        <button onClick={() => dispatch({ type: "REMOVE10", value: 10 })}>
          Dicrement5
        </button>
      </div>
    </div>
  );
};
export default Counter2;
