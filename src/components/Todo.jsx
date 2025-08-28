import React, { useReducer } from "react";

const initialState = [];

const reducer = (state, action) => {
  //for here the state is todos in useReducer
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          id: state.length + 1,
          name: action.payload, //event.target.value is passing data to action.payload
        },
      ];
    case "DELETE_TASK":
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};

const Todo = () => {
  const [todos, dispatch] = useReducer(reducer, initialState); //useReducer assigned here, there are two parameters passed in to useReducer where as in useState we can pass only one parameter

  return (
    <>
      <h1>Todo {todos.length}</h1>
      <h3>Add New Task : </h3>
      <form>
        <input
          type="text"
          onBlur={(e) =>
            dispatch({ type: "ADD_TASK", payload: e.target.value })
          }
        />
      </form>
      <hr />
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            {item.name}{" "}
            <button
              onClick={() => {
                dispatch({ type: "DELETE_TASK", payload: item.id });
              }}
            >
              DELETE
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
