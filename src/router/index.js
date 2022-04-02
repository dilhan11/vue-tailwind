import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard/Dashboard.vue'
import Login from '../views/auth/Login.vue'
import About from '../views/About/About.vue'

const Container = () =>
  import('@/container/Container')

const routes = [{
  path: '/',
  name: 'Login',
  props: false,
  component: Login,
  meta: {
    requiresPublic: true
  }
},
{
  path: '/',
  name: '',
  component: Container,
  children: [{
    path: 'dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: 'about',
    name: 'About',
    component: About
  }]
}
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
