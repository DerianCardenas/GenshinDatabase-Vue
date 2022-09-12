import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: IndexView
  },
  {
    path: '/personajes',
    name: 'personajes',
    component: () => import(/* webpackChunkName: "about" */ '../views/Personajes.vue')
  },
  {
    path: '/character',
    name: 'charview',
    props:true,
    component: () => import(/* webpackChunkName: "about" */ '../views/Personaje.vue')
  },
  {
    path: '/character/:nombre/:perfil/:cumple/:rareza/:titulo/:sexo/:region/:afiliacion/:elemento/:arma',
    name: 'charview',
    props:true,
    component: () => import(/* webpackChunkName: "about" */ '../views/Personaje.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
