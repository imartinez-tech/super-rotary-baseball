import { useReducer } from "react";
import {
  UPDATE_TICKETS,
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
  ADD_MULTIPLE_TO_CART,
  UPDATE_TEAMS,
  UPDATE_CURRENT_TEAM,
  CLEAR_CART,
  TOGGLE_CART
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_TICKETS:
      return {
        ...state,
        tickets: [...action.tickets],
      };

    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.ticket],
      };

    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.tickets],
      };

    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map(ticket => {
          if (action._id === ticket._id) {
            ticket.purchaseQuantity = action.purchaseQuantity
          }
          return ticket
        })
      };

    case REMOVE_FROM_CART:
      let newState = state.cart.filter(ticket => {
        return ticket._id !== action._id;
      });

      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState
      };

    case CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: []
      };

    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen
      };

    case UPDATE_TEAMS:
      return {
        ...state,
        teams: [...action.teams],
      };

    case UPDATE_CURRENT_TEAM:
      return {
        ...state,
        currentTeam: action.currentTeam
      }

    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState)
}
