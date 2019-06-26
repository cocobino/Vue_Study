<template>
  <form v-on:submit.prevent="submitForm">
    <div>
      <label for='username'>id : </label>
      <input id='username' type = 'text' v-model="username">
    </div>

    <div>
    <label for='password'>password : </label>
      <input id='password' type = 'password' v-model = 'password'>
    </div>
    <button type="submit">login</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
data: function(){
  return{
      username: '',
      password: '',
  }
},
methods: {
  submitForm: function(){ 
    var url= 'https://jsonplaceholder.typicode.com/todos/users'; //데이터를 보내고 받을수 있음
    var data ={
      username : this.username,
      password : this.password
    }
    axios.post(url, data); //http 통신라이브러러 post : 데이터생성
        .then(function(response){
        })
        .catch(function(error){
        });
  }
}
}
</script>

<style>

</style>
