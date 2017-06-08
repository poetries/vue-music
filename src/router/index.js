import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'src/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
