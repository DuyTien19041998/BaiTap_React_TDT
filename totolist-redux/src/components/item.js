import React from 'react';
import { deleteTodo } from "../action";
import { connect } from "react-redux";
class Item extends React.Component {
  render() {
    console.log(this.props);
    let { index, todoName } = this.props
    return (
      <tr>
        <th scope="row">{index + 1}</th>
        <td>{todoName}</td>
        <td>
          <button onClick={(e) => this.props.handlerEdit(e, todoName)} type="button" className="btn btn-outline-primary">Edit</button>
          <button onClick={(e) => this.props.handlerDelete(e, index)} type="button" className="btn btn-outline-danger">Delete</button>
        </td>
      </tr>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodoProps: (indexTodo) => {
      dispatch(deleteTodo(indexTodo));
    }
  }
}

export default connect(null, mapDispatchToProps())(Item);
