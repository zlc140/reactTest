import { START,STOP,RESET,TIMER } from './allActions'
// import { setInterval } from 'core-js/library/web/timers';

let setInter
export const onstart = () => {
        // timers()
        return {type:START}
    
}
export const onstop = () => {
    // clearInterval(setInter)
    return {type:STOP}
}
export const onreset = () => {
    return {type:RESET}
}

export const ontimer = () => {
    return {type:TIMER}
}
// function timers(){
//     console.log('start')
//     setInter = setInterval(function(){
//         return dispatch => {
//             dispatch({type:TIMER}) 
//         }
//     },1000)
// }
