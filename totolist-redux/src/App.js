import React from 'react';
import './App.css';
import List from './components/list'
import TodoForm from './components/todo_form';
// import axios from 'axios';
// import ReduxThunk from 'redux-thunk';

// import qs from "querystring";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todoName: "",
      todo_lists: [
        // {"id":"1","name":"name 1","CreatedAt":1590236106},
        // {"id":"2","name":"name 2","CreatedAt":1590236046},
        // {"id":"3","name":"name 3","CreatedAt":1590235986},
        // {"id":"4","name":"name 4","CreatedAt":1590235926},
        // {"id":"5","name":"name 5","CreatedAt":1590235866},
        // {"id":"6","name":"name 6","CreatedAt":1590235806},
        // {"id":"7","name":"name 7","CreatedAt":1590235746},
        // {"id":"8","name":"name 8","CreatedAt":1590235686},
        // {"id":"9","name":"tiennajd","CreatedAt":1590480763}
      ],
      loader:true,
    }
  }

  handlerSubmit(e, inputRef){
    // e.preventDefault();
    // let todo = {
    //   // id: 10,
    //   name: inputRef.current.value
    // }
    
    // axios.post("https://5ec912c99ccbaf0016aa8b63.mockapi.io/todolists",todo)
    //   .then(res => {
    //     // console.log(res);
    //     // console.log(res.data);
    //     this.setState({
    //      todo_lists: [...this.state.todo_lists, res.data]
    // })
    //    alert("Bạn đã tạo dữ liệu thành công : ");
    //       })
  }

  handlerDelete(e, index){
    let todos = this.state.todo_lists
    todos.splice(index,1)
    this.setState({
      todo_lists: todos
    })
  }

  handlerEdit(e, todoName){
    // alert(todoName);
    this.setState({
      todoName: todoName
    })
  }
  heandlesearch(){
    alert('sreakjhd');
    this.state({

    })
  }
  // handleSearch = (search) => {
  //   let currentTodos = [];
  //   let newList = [];
  //   if (search !== "") {
  //     currentTodos = this.state.todos;
  //     newList = currentTodos.filter( todo => {
  //       const lc = todo.title.toLowerCase();
  //       const filter = search.toLowerCase();
  //       return lc.includes(filter);
  //     });
  //   } else {
  //     newList = this.state.todos;
  //   }
  //   this.setState({
  //     filtered: newList
  //   });
  //   console.log(search);
  
  // };
  componentDidMount(){
    // axios.get("https://5ec912c99ccbaf0016aa8b63.mockapi.io/todolists")
    // .then((res)=>{
    //   console.log(res.data);
    //   this.setState({
    //     todo_lists: res.data
    //   })
    // }).catch((e)=>{
    //   alert(e);
    //  }
    // )

  }
  render(){
    return (
      <div className="mg-app">
        <TodoForm todoName={this.state.todoName} handlerSubmit={this.handlerSubmit.bind(this)}/>
        <List handlerEdit={this.handlerEdit.bind(this)} handlerDelete={this.handlerDelete.bind(this)} />
        {this.state.loader && <div className="loader"></div> }
        { /* todos={this.state.todo_lists} */}
      </div>
    );
  }
}
export default App;
