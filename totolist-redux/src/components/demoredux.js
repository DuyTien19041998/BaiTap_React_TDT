// import { createStore, combineReducers } from 'redux';

// // create 2 action 
// export const ADD_PRODUCTS = 'products/ADD_PRODUCTS';
// export const ADD_USER = 'user/ADD_USER';

// var defaultState = [
//     {
//         name: "Nguyen van A",
//     }
// ]
// function userReducer(state = defaultState, action) {

//     switch(action.type){
//         case ADD_USER:
//             let newState = [...state, {name: action.text}]
//             return newState;
//         default:
//             return state;
//     }
// }
// function productReducer(state = defaultState, action2) {

//     switch(action2.type){
//         case ADD_PRODUCTS:
//             let newProduct = [...state, {name: action2.text}]
//             return newProduct;
//         default:
//             return state;
//     }
// }
// // const store = createStore(userReducer);


// const rootReducer = combineReducers({user: userReducer, product: productReducer});
// const store = createStore(rootReducer);


// const action = {
//     type: "ADD_USER",
//     text: " Nguyen van B "
// }
// const action2 ={
//     type: "ADD_PRODUCTS",
//     text: " san pham 2"
// }

// store.dispatch(action);
// store.dispatch(action2);
// console.log(store.getState());


// create  store
import {createStore, combineReducers} from 'redux'
var defaultState = [
   { name : "Nguyễn văn A"}
]
const ADD_PRODUCT = 'products/ADD_PRODUCT'
const ADD_USER = 'user/ADD_USER'
function productReducer(state = defaultState, action1){
    // if(action.type === 'ADD_USER'){
    //     let newState = [...state,{name : action.text}]
    //     return newState
    // }
    switch(action1.type){
        case ADD_PRODUCT : 
            let newState = [...state,{name : action1.text}]
            return newState
        default : 
            return state
        
    }
    // return state
}
function userReducer(state = defaultState, action2){
    // if(action.type === 'ADD_USER'){
    //     let newState = [...state,{name : action.text}]
    //     return newState
    // }
    switch(action2.type){
        case ADD_USER : 
            let newState = [...state,{name : action2.text}]
            return newState
        default : 
            return state
        
    }
    // return state
}
const rootReducer = combineReducers({user : userReducer, product : productReducer})
const store = createStore(rootReducer)

const action2 = {
    type : ADD_USER,
    text : 'Nguyễn Văn B'
}
const action1 = {
    type : ADD_PRODUCT,
    text : 'san pham 1'
}
 store.dispatch(action2)
 store.dispatch(action1)
console.log(store.getState())
// console.log(store)