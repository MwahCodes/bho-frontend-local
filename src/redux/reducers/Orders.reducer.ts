import { ClothingItem, Order } from '@uark-acm/bho-data-models/lib';
import { AnyAction } from 'redux';
import { Action } from '../actions/types';
import Loadable from '../redux-config/loadable';

export interface OrdersState {
	orders: Loadable<Order[]>;
}

const DEFAULT_STATE: OrdersState = {
	orders: { status: 'loading' },
};

const OrdersReducer = (state = DEFAULT_STATE, action: AnyAction) => {
    switch(action.type)
    {
        case Action.FETCH_ORDERS:
            return { ...state, orders: action.payload };
        case Action.CREATE_ORDER:
            // your logic here
            break;
        default:
            return state;
    }
}

export default OrdersReducer;