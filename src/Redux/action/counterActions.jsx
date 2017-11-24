

// export const GET_NAME = 'GET_NAME'
// // Timer
// export const START = 'START'
// export const STOP = 'STOP'
// export const RESET = 'RESET'
// export const TIMER = 'TIMER'

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'




export const increment = (value) => ({
        type:INCREMENT,
         value
})

export const decrement = (value) => ({
    type:DECREMENT,
    value
})
