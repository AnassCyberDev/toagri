import { ADD_ITEM,REMOVE_ITEM,MODIFY_ITEM,GET_ITEMS } from "../actions/types";

const initialState = {
    cartItems:[]
};


export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ITEMS:
            
            console.log(action.payload);
            return {
                ...state,
                cartItems:action.payload
            };

        case ADD_ITEM:
            console.log("this is adding stream redux",action.payload)
            const newcartItems=action.payload
            console.log('test adding items',newcartItems)
            return {
                ...state,
                cartItems:newcartItems
            };

        case MODIFY_ITEM:
            console.log("modifyed item",action.payload)
         
            const index = state.cartItems.findIndex(obj => obj.id == action.payload.id);
            if (index !== -1) {
                state.cartItems[index] = action.payload;
              }
              console.log("this is it",state.cartItems)
            return {
                ...state,
                cartItems:state.cartItems
            };

        case REMOVE_ITEM:
            console.log("deleted item id",action.payload)
         
            const newArray = state.cartItems.filter(item => item.id !== action.payload);
          
              console.log("this is it",state.cartItems)
            return {
                ...state,
                cartItems:newArray
            };


        default:
            return state;
    }
}
