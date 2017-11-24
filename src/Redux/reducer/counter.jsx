import {INCREMENT,DECREMENT} from '../action/allActions'

const init = {
    number:1,
}

export default  function counter(state=init,action)  {
    switch(action.type) {
        case INCREMENT:
            return { ...state,number:state.number + action.value}
        case DECREMENT:
            if(state.number < 2){
                return { ...state,number:1}
            }else{
                return { ...state,number:state.number - action.value}
            }
        default:
            return state
    }
}
