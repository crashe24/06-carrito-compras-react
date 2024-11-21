// uso del useReducer
export const initialState = JSON.parse(window.localStorage.getItem('cart')) || []
export const CART_ACTION_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CLEAR_CAR: 'CLEAR_CAR'
}

// update localstora
export const updateLocalStorage = state => {
    window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state, action) => {
    switch (action.type) {
        case CART_ACTION_TYPES.ADD_TO_CART:
            const productInCartIndex = state.findIndex(
                item => item.id === action.payload.id
            )
            if (productInCartIndex >= 0 ) {
                const newState = structuredClone(state)
                newState[productInCartIndex].quantity +=1
                return newState
            }

            const returnNewState =  [
                ...state,
                {
                    ...action.payload,
                    quantity: 1
                }
            ]
            updateLocalStorage(returnNewState)
            return returnNewState
        case CART_ACTION_TYPES.REMOVE_FROM_CART:
            const { id } = action.payload
            const newState = state.filter( item => item.id !== id)
            updateLocalStorage(newState)
            return newState
       case CART_ACTION_TYPES.CLEAR_CAR:
            updateLocalStorage([])
            return []
        default:
            return initialState 
    }
   
}