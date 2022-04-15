import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearTodoList } from "../../redux/actions/todoActions";
import TodoItem from "./TodoItem";
//! redux dan useDispatch useSelector u import ediyoruz

const TodoList = () => {
  //! useDispatch ve useSelector ile redux store ın içerisindeki todoList stateını alıyoruz
  const {list} = useSelector((state) => state.todoReducer)
  const dispatch = useDispatch()


  const handleClearList = () => {
    //! clearTodoList action ını dispatch ediyoruz
    dispatch(clearTodoList())
  
  };
  return (
    <div>
      <div>
        {/* list i map edip TodoItem a propslar ile birlikte gönderiyoruz gönderiyoruz  */}
        {list.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
      <div className="clear-wrapper">
        <button onClick={handleClearList} className="clear-button">
          Clear
        </button>
      </div>
    </div>
  );
};

export default TodoList;
