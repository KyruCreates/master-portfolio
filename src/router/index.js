import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/photo',
    name: 'Photography',
    component: function() {
      return import('../views/Photography.vue')
    }
  },
  {
    path: '/games',
    name: 'Game Design',
    component: function() {
      return import('../views/GameDes.vue')
    }
  },
  {
    path: '/art',
    name: 'Art',
    component: function() {
      return import('../views/Art.vue')
    }
  },
  {
    path: '/music',
    name: 'Music',
    component: function() {
      return import('../views/Music.vue')
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
