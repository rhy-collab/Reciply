import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CONFIRM_ORDER,
} from './types'

export const addToCart = params => (dispatch) => {
  const item = {
    ...params,
    amount: 1
  }
  dispatch({
    type: ADD_TO_CART,
    status: 'success',
    payload: item
  })
}

export const removeFromCart = params => (dispatch) => {
  console.log('[DEBUG]: action remove from cart')
  dispatch({
    type: REMOVE_FROM_CART,
    status: 'success',
    payload: params
  })
}

export const confirmOrder = params => (dispatch) => {
  console.log("[DEBUG]: action confirmOrder")
}