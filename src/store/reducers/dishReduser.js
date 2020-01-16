import {ADD_CARD} from "../action/action";


const initialState = {
    card: {},

    delivery:150,
    total: 0,
};

const dishReducer = (state = initialState, action) => {

        switch (action.type) {
            case ADD_CARD:
                let order;
                if(state.card[action.order.name]) {
                    order = {...action.order,
                        count: state.card[action.order.name].count + 1,
                        price: state.card[action.order.name].price + action.order.price
                    }

                } else {
                    order = {...action.order, count: 1, price: action.order.price}
                }
                    const orders = {...state.card, [action.order.name] : order};
                return {
                    ...state,
                    card: orders,
                    total: state.total + action.order.price
                };
            case 'REMOVE':
               return{
                   ...state
               }
            default: return state
        }
};

export default dishReducer;