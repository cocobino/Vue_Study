import Vue from 'vue'
 import App from './App.vue'

Vue.config.productionTip = false

  var App = {
    template : '<div>app</div>'
  }


new Vue({
  render: h => h(App), // Component 내용을 다른파일에서 불러옴 -> 랜더함
  components : {
    'app' : App
  }
}).$mount('#app')

 