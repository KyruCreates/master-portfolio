import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Photo from '../views/Photography.vue';
import Games from '../views/GameDes.vue';
import Art from '../views/Art.vue';
import Music from '../views/Music.vue';
import About from '../views/About.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/photo',
    name: 'Photography',
    component: Photo
  },
  {
    path: '/games',
    name: 'Game Design',
    component: Games
  },
  {
    path: '/art',
    name: 'Art',
    component: Art
  },
  {
    path: '/music',
    name: 'Music',
    component: Music
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
