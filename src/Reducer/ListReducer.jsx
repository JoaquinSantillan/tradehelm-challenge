

export const ListReducer = (state=[],action)=>{
    switch (action.type){
        case 'add':
            return[...state,action.payload]
        case 'delete':
            return state.filter
            (item=> item.id !== action.payload)
        case 'bought':
            return state.map(item=>
                (item.id === action.payload)?
                {...item,done:!item.done}
                :item)
        default:
            state;
    }
}