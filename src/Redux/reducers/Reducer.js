import ACTION from '../action/actionTypes';
const initialState=[]

const Reducer= (state=initialState,action)=>{
    switch(action.type){
        case ACTION.ADD_TO_CART: return[
            ...state,
            action.payload
        ]
        case ACTION.REMOVE_FROM_CART: return [
            ...action.payload
        ]
        case ACTION.INCREASE_ITEM: return [
            ...action.payload
        ]
        case ACTION.DECREASE_ITEM: return [
            ...action.payload
        ]
        case ACTION.EMPTY_CART: return []
        default: return state
    }
}
export default Reducer