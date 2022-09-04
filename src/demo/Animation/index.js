import { useState, useEffect, useReducer } from "react";

// const TEXT = ['Freelancer', 'UX Designer', 'Web Developer', 'Web Designer'];

const arr = [
  [
    "F",
    "Fr",
    "Fre",
    "Free",
    "Freel",
    "Freela",
    "Freelan",
    "Freelanc",
    "Freelancer"
  ],
  [
    "U",
    "UX",
    "UX ",
    "UX D",
    "UX De",
    "UX Des",
    "UX Desi",
    "UX Desig",
    "UX Design",
    "UX Designe",
    "UX Designer"
  ],
  [
    "W",
    "We",
    "Web",
    "Web ",
    "Web D",
    "Web De",
    "Web Dev",
    "Web Deve",
    "Web Devel",
    "Web Develo",
    "Web Develop",
    "Web Develope",
    "Web Developer"
  ],
  [
    "W",
    "We",
    "Web",
    "Web ",
    "Web D",
    "Web De",
    "Web Des",
    "Web Desi",
    "Web Desig",
    "Web Design",
    "Web Designe",
    "Web Designer"
  ]
];

const Animation = () => {
  const initialState = {
    activeIndex: 0,
    textIndex: 0,
    direction: true,
    next: false
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_INDEX":
        return {
          ...state,
          ...action.payload
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const animationLogic = () => {
    if (state.direction) {
      if (arr[state.activeIndex].length - 1 === state.textIndex) {
        dispatch({
          type: "UPDATE_INDEX",
          payload: {
            direction: false
          }
        });
      } else {
        dispatch({
          type: "UPDATE_INDEX",
          payload: {
            textIndex: (state.textIndex + 1) % arr[state.activeIndex].length
          }
        });
      }
    } else {
      if (state.textIndex === 0) {
        dispatch({
          type: "UPDATE_INDEX",
          payload: {
            direction: true,
            next: true
          }
        });
      } else {
        dispatch({
          type: "UPDATE_INDEX",
          payload: {
            textIndex: (state.textIndex - 1) % arr[state.activeIndex].length
          }
        });
      }
    }
    if (state.next) {
      if (state.activeIndex < arr.length - 1) {
        dispatch({
          type: "UPDATE_INDEX",
          payload: {
            activeIndex: state.activeIndex + 1,
            next: false
          }
        });
      } else {
        dispatch({
          type: "UPDATE_INDEX",
          payload: {
            activeIndex: initialState.activeIndex,
            next: false
          }
        });
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(animationLogic, 1000);
    if (interval) {
      return () => clearInterval(interval);
    }
  }, [state]);

  return (
    <div>
      <h1>Animation</h1>
      <h1>{arr[state.activeIndex][state.textIndex]}</h1>
    </div>
  );
};
export default Animation;
