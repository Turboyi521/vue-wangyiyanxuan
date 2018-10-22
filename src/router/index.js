import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home/Home.vue'
import List from '../pages/List/List.vue'
import Person from '../pages/Person/Person.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Topic from '../pages/Topic/Topic.vue'

Vue.use(VueRouter)

export default   new VueRouter({
  routes:[
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/list',
      component: List,
    },
    {
      path: '/person',
      component: Person,
    }, {
      path: '/shopCart',
      component: ShopCart,
    },
    {
      path: '/topic',
      component: Topic,
    },

  ]

})
