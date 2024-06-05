import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/HomePage.vue'
import RepoDetails from '../components/RepoDetails.vue';
import AppOutlet from '../components/AppOutlet.vue';
// import ErrorPage from './ErrorPage.vue'
import ErrorPage from '../components/ErrorPage.vue';


// const routes = [
//   { path: '/', component: Home },
//   { path: '/repodetails', component: AppOutlet },
//   { path: '/:id', component: RepoDetails },
//   { path: '/error', component: ErrorPage }
// ]

// const router = createRouter({
//   history: createWebHistory(),
//   routes
// })

// export default router
// src/router/index.js
// import { createRouter, createWebHistory } from 'vue-router';
// import Home from '../components/HomePage.vue';
// import RepoDetails from '../components/RepoDetails.vue';

const routes = [
  { path: '/repodetails', component: AppOutlet },
  { path: '/error', component: ErrorPage },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/repodetails/:id',
    name: 'RepoDetails',
    component: RepoDetails
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

