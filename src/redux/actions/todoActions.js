import {
  ADD_TODO,
  CLEAR_TODO_LIST,
  DELETE_TODO,
  TOGGLE_TODO,
} from "../types/todoTypes";

// ! import ettiğimiz typeları fonksiyonlar içerisinde return etmesini sağlyoruz
// ! burada counter projesinden farklı olarak payload kısmı fonksiyonun bi parametre alma durumunu belirtiyor
// ! todo proje özelinde bu parametreler id oluyor 
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload : payload
  };
};

export const delete_todo = (payload) => {
  return {
    type: DELETE_TODO,
    payload
  };
};

export const clearTodoList = () => {
  return {
    type: CLEAR_TODO_LIST,
  };
};

export const toogle_todo = (payload) => {
  return {
    type: TOGGLE_TODO,
    payload
  };
};
