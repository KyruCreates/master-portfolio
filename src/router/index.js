import { createRouter, createWebHashHistory } from 'vue-router';
// Import different views for each page
import Home from '../views/Home.vue';
import Web from '../views/WebDev.vue';
import Photo from '../views/Photography.vue';
import Games from '../views/GameDes.vue';
import Art from '../views/Art.vue';
import Music from '../views/Music.vue';
import Contact from '../views/Contact.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/web',
    name: 'Front-End Web Development',
    component: Web
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
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
