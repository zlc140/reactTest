

export const GET_NAME = 'GET_NAME'
// Timer
export const START = 'START'
export const STOP = 'STOP'
export const RESET = 'RESET'
export const TIMER = 'TIMER'

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'




export function getNumber(test){
    return {
        type:TIMER,
        test
    }
}
