
import { START, STOP, RESET, TIMER } from '../action/allActions'
import { setInterval } from 'core-js/library/web/timers';


const init = {
    seconds:0,
    status:'Stopped',
}
let setInter
export default function timer(state=init,action) {
    switch(action.type) {
        case START:
            return { ...state, status:'Running' ,seconds:state.seconds +1}
        case STOP:
            return { ...state, status:'Stopped' }
        case RESET:
            return { ...state,seconds:0, status:'Stopped' }
        case TIMER:
            return { ...state, status:'Stopped',seconds:state.seconds + 1 }
        default:
            return state
    }
}