<template>
  <div>
    <!--프롭스 속성이름 = 상위컴포넌트 이름 -->
  <app-header 
  v-bind:propsdata='str'
  v-on:renew='renewStr'></app-header>
    
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  data  :function(){
    return{
      str : 'Header'
    }
},
components:{
  'app-header' : AppHeader
},
methods :{
  renewStr: function (){
    this.str ='hi';
  }
}
}
</script>

<style>

</style>
