import { createStore, combineReducers } from "redux";
import todoReducer from "./reducer/todoReducer";

// ! Redux kullanımı için redux içerisine bir dosya oluşturuyoruz burası bizim storemuzun olduğu yer olacak 
// ! burda reducers ları topluyoruz bunun için createStore ve combineReducers fonksiyonlarını redux dan import ediyoruz.



//! store redux >> index.js
// ! reducer todoReducer


const reducers = combineReducers({
  todoReducer: todoReducer,
});



//! export olarak createSore içerisinde reducer larrı yolluyoruz istediğimiz yerden çağırabiliriz...
export const myStore = createStore(reducers);
