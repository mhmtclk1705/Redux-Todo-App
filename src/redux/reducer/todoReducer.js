import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, CLEAR_TODO_LIST } from "../types/todoTypes";

const initialState = {
    counter: 0,
    list: [ 
        {id: 0, text: 'Add todo', completed: false}
    ] 
  };

//  ! typeları import ettikten sonra başlangıç olarak yine bi initialstate oluşturuyoruz
// ! yine burda switch case yapısı kullanıyoruz ve action.type ile action.payload ile payloadını alıyoruz


const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            
        //!         ADD_TODO da önceki state i olduğu gibi alıp counter ı 1 arttırıp list içerisinde de
        // ! yeni gelen id yi son counter ın 1 fazlasını text olarak yazılan input value yu  ve varsayılan olarak todo tamamlanmadığı
        // ! için completed ı false olarak ekliyoruz 
            return{
                
                ...state,
                counter: state.counter + 1,
                list: [
                    ...state.list,
                    {
                        id: state.counter + 1,
                        text: action.payload,
                        completed: false
                    }

                ]
            }
        case DELETE_TODO:
            // ! seçilmeyenleri filterla tutup yeni listi döndürüyoruz
            return{
                ...state,
                list: state.list.filter((item) => item.id !== action.payload)
            }

        case TOGGLE_TODO:
            return{
                //! seçilenin complete ini false ise true - true ise false yapıyoruz
                ...state,
                list: state.list.map((item) => {
                    if(item.id === action.payload){
                        return{
                            ...item,
                            completed: !item.completed
                        }
                    }
                    return item
                })
            }
        case CLEAR_TODO_LIST:
            // ! listeyi siliyoruz
            return{
                ...state,
                list: []
            }

    
        default:
            // !  default olarak state döndürüyoruz
            return state
    }
}

export default todoReducer