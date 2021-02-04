import React from "react";
import {
  SET_LOADING,
  SET_USER,
  SET_MESSAGE,
  SET_TOKEN,
} from "../helpers/constant";
import Store from "./store";

export const initialState = {
  user: null,
  message: null,
  loading: false,
  token: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case SET_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const StateProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
