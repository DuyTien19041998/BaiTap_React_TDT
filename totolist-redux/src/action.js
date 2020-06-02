import axios from 'axios';


export function deleteTodo(indexTodo){
    return {
        type: "DELETE_TODO",
        indexTodo
    }
}
export function getData(){
    // return {
    //     type: "DELETE_TODO",
    //     indexTodo
    // }
    return dispatch => {
        dispatch(getDataStarted());
        axios
        .post(`https://5ec912c99ccbaf0016aa8b63.mockapi.io/todolists`, {
        })
        .then(res => {
          dispatch(getDataSuccess(res.data));
        })
        .catch(err => {
          dispatch(getDataFail(err));
        });
    }
}
// const addTodoSuccess = todo => (
//     type: ADD_TODO_SUCCESS,
//     payload: {
//       ...todo
//     }
//   };
export function getDataStarted()  {
    return{
        type:" GET_DATA_STARTED"
    }
  };
  export function getDataFail(err)  {
    return{
        type: "GET_DATA_Fail",
        err
    }
  };
  export function getDataSuccess(data)  {
    return{
        type: "GET_DATA_SUCCESS",
        data
    }
  };
 