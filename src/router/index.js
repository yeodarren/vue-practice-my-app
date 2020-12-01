import { createRouter, createWebHistory } from 'vue-router'

import CoachDetail from '../screens/coaches/CoachDetail.vue'
import CoachesList from '../screens/coaches/CoachesList.vue'
import CoachRegistration from '../screens/coaches/CoachRegistration.vue'
import ContactCoach from '../screens/requests/ContactCoach.vue'
import RequestsReceived from '../screens/requests/RequestsReceived.vue'
import NotFound from '../screens/NotFound.vue'

const routes = [
  { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,
      children: [
        { path: 'contact', component: ContactCoach } // /coaches/c1/contact
      ]
    },
    { path: '/register', component: CoachRegistration },
    { path: '/requests', component: RequestsReceived },
    { path: '/:notFound(.*)', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
