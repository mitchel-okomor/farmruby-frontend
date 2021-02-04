import { SET_LOADING, SET_USER, SET_MESSAGE } from "../helpers/constant";

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

    default:
  }

  return state;
};
