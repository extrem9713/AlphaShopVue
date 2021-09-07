import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'home',
    component: () => import('../views/Checkout.vue'),
    redirect: '/AlphaShop/Checkout/address',
  },

  {
    path: '/AlphaShop/Checkout',
    name: 'Checkout',
    component: () => import('../views/Checkout.vue'),
    
    children: [
      {
        path: 'address',
        name: 'address',
        component: () => import('../components/FormStep1.vue')

      },
      {
        path: 'delivery',
        name: 'delivery',
        component:()=>import('../components/FormStep2.vue')

      },
      {
        path: 'payment',
        name: 'payment',
        component: () => import('../components/FormStep3.vue')

      },

    ]
  },
  
  {
    path: '*',
    name: '404',
    component: () =>import('../views/404.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
