import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
    const [state, setState] = useState(initialState);

/*     const addToCart = (payload: any) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        });
    } */

/*     const removeFromCart = (payload: any, indexToRemove: any) => {
        setState({
            ...state,
            cart: state.cart.filter((_item: any, indexCurrent: any) => {
                return indexCurrent != indexToRemove;
            }),
        });
    } */

/*     const addToBuyer = (payload: any) => {
        setState({
            ...state,
            buyer: [...state.buyer, payload]
        })
    } */

/*     const addNewOrder = (payload: any) => {
        setState({
            ...state,
            orders: [...state.orders, payload],
        })
    } */


    return {
/*         addToCart,
        removeFromCart,
        addToBuyer,
        addNewOrder, */
        state,
    };
};

export default useInitialState;