
import { START, STOP, RESET, TIMER } from '../action/allActions'


const init = {
    seconds:1,
    status:'Stopped',
}
export default function timer(state=init,action) {
    switch(action.type) {
        case START:
            return { ...state, status:'Running' }
        case STOP:
            return { ...state, status:'Stopped' }
        case RESET:
            return { ...state,seconds:0 }
        case TIMER:
            return { ...state,seconds:state.seconds + 1 }
        default:
            return state
    }
}