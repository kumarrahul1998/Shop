import ACTION from './actionTypes';

export const AddItem =(item,cart)=>{
    if(cart?.find(elem=>elem.name===item.name)){
        const temp = [...cart];
        const index = cart.findIndex(elem=>elem.name===item.name);
        temp[index].quantity+=1;
        return {
            type:ACTION.INCREASE_ITEM,
            payload: temp,
        }
    }else{
        const temp = {...item};
        temp.quantity=1;
        return {
            type:ACTION.ADD_TO_CART,
            payload:temp,
        }
    }
    
}

export const RemoveItem = (item,cart)=>{
    if(cart.find(elem=>elem.name===item.name).quantity!==1){
        const temp = [...cart];
        const index = cart.findIndex(elem=>elem.name===item.name);
        temp[index].quantity-=1;
        return {
            type:ACTION.DECREASE_ITEM,
            payload: temp,
        }
    }else{
        const temp = cart.filter(elem=>elem.name!==item.name);
        return {
            type: ACTION.REMOVE_FROM_CART,
            payload: [...temp],
        }    
    }
}   