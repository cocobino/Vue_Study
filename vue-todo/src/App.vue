<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem='addOneItem'></TodoInput>
    <TodoList v-bind:propsdata='todoItems'
     v-on:removeItem="removeOneItem"  
     v-on:toggleItem="toggleOneItem"></TodoList>
    <TodoFooter v-on:clearAll ='clearAllItem' ></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
  
  data(){
    return{
      todoItems: []
    }
  },
  methods:{
    addOneItem(todoItem){
      const obj = {completed: false, item: todoItem}; //text 값 + 텍스트 체크여부
        //저장하는 로직
        localStorage.setItem(todoItem, JSON.stringify(obj)); //local 에서보여줄때 String 으로 변환

        this.todoItems.push(obj);
    },
    removeOneItem(todoItem, index){
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    },
    toggleOneItem(todoItem, index){
       this.todoItem[index].completed = !this.todoItems[index].completed;
          localStorage.removeItem(todoItem.item);
          localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItem(){
      localStorage.clear(); //local storage 만 비우고 화면을 비우지않음
      this.todoItems = [];
    }
  },
  created(){
 if(localStorage.length>0){
            for(let i=0; i<localStorage.length; i++){
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                   this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));

                    
                    // this.todoItems.push(localStorage.key(i));
                }
                // console.log(this.todoItems[i]);
                
            }
        }
  },
  components:{
    'TodoHeader' : TodoHeader,
    'TodoInput' : TodoInput,
    'TodoList' : TodoList,
    'TodoFooter' : TodoFooter
  }
}
</script>

<style>
  body{
    text-align: center;
    background-color: #F6F6F6;
  }

  input {
    border-style: groove;
    width: 200px;
  }

  button{
    border-style: groove;
  }

  .shadow{
    box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
  }
</style>
