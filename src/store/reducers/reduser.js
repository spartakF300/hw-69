import {FETCH_DISH_SUCCESS} from "../action/action";


const initialState = {
   dishes: []
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case FETCH_DISH_SUCCESS:
         return {...state, dishes: action.dishes}
      default: return state;
   }


};

export default reducer;