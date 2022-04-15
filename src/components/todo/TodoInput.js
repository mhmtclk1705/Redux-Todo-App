import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions/todoActions";

//! addTodo action ını import ediyoruz
//! useDispatch ile dispatch fonksiyonunu alıyoruz
const TodoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(text)
    console.log(e.target.value);
    //! inputu dispatch ile add todo action ına gönderiyoruz
    dispatch(addTodo(text))
    setText("");
  };
  
  return (
        <form onSubmit={handleSubmit}>
          <input
            className="todo-input"
            type="text"
            placeholder="Add Todo"
            value={text}
            onChange={(e) =>setText(e.target.value) }
          />
          <button className="add-button" onClick={handleSubmit}>
            Add
          </button>
        </form>
  );
};

export default TodoInput;
