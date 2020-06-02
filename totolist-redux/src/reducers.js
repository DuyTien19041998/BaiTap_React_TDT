import axios from 'axios';
let stateDefault = [
    // { "id": "1", "name": "name 1", "CreatedAt": 1590236106 },
    // { "id": "2", "name": "name 2", "CreatedAt": 1590236046 },
    // { "id": "3", "name": "name 3", "CreatedAt": 1590235986 },
    // { "id": "4", "name": "name 4", "CreatedAt": 1590235926 },
    // { "id": "5", "name": "name 5", "CreatedAt": 1590235866 },
    // { "id": "6", "name": "name 6", "CreatedAt": 1590235806 },
    // { "id": "7", "name": "name 7", "CreatedAt": 1590235746 },
    // { "id": "8", "name": "name 8", "CreatedAt": 1590235686 },
    // { "id": "9", "name": "tiennajd", "CreatedAt": 1590480763 } 
];

export  function reducers(state = stateDefault, action) {
    switch (action.type) {
        case "DELETE_TODO":
            console.log(action)
            let todos = state
            todos.splice(action.indexTodo, 1)
            return [...todos];

            case "GET_DATA_STARTED":
                return{
                    loading: true,
                    todos: []
                }

            case "GET_DATA_Fail":
                return{
                    loading: false,
                    todos: []
                }
            case "GET_DATA_SUCCESS":
            return{
                loading: false,
                todos: action.data
            }
                
            default:
                return {
                    todos: []
                }
    }

}
const action = {
    type: " DELETE_TODO",
    indexTodo: 1
}