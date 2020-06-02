import React from 'react';
import Item from './item';
import { connect } from "react-redux";
import {getData} from  '../action';

class List extends React.Component {
  componentDidMount(){
    this.props.getData();
  }
  render() {
    console.log(this.props);
    let dataShow = this.props.todos.map((value, index) => {
      return <Item handlerEdit={this.props.handlerEdit} handlerDelete={this.props.handlerDelete} key={index} todoName={value.name} index={index} />
    })
    return (
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col" className="bg-success">#</th>
              <th scope="col" className="bg-success">Name</th>
              <th scope="col" className="bg-success">Action</th>
            </tr>
          </thead>
          <tbody>
            {dataShow}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    loading: state.loading,
    err: state.err
  }
}
const mapDispatchToProps = (state) => {
  // console.log(state);
  return {
   getData: ()=>{
    //  dispatch();
   }
    // loading: state.loading
  }
}
export default connect(mapDispatchToProps(),mapStateToProps())(List);
