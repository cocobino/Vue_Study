import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
    fetch(){
    const arr = [];
            if(localStorage.length>0){
                       for(let i=0; i<localStorage.length; i++){
                           if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                            arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                           }
                       }
                    } 
                    return arr;
             },
    };
     
export const store = new Vuex.Store({
    state: {
        todoItems: storage.fetch()
    },
    getters:{
      storedTodoItems(){
        return state.todoItems;
      }
    },
    mutations:{
        addOneItem(state, todoItem){
            const obj = {completed: false, item: todoItem}; //text 값 + 텍스트 체크여부
            //저장하는 로직
              localStorage.setItem(todoItem, JSON.stringify(obj)); //local 에서보여줄때 String 으로 변환
              state.todoItems.push(obj);
          },
          removeOneItem(state, payload){
            localStorage.removeItem(payload.todoItem.item);
            state.todoItems.splice(payload.index, 1);
          },
          toggleOneItem(state, payload){
            state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
            localStorage.removeItem(payload.todoItem.item);
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
          },
          clearAllItems(state){
            console.log("도착")
            localStorage.clear(); //local storage 만 비우고 화면을 비우지않음
            state.todoItems = [];
          }
    }
});