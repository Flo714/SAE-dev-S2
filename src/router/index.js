import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ProgrammeView from '../views/ProgrammeView.vue'
import ArtistesView from '../views/ArtistesView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'AccueilView', component: AccueilView },
    { path: '/Programme', name: 'ProgrammeView', component: ProgrammeView },
    { path: '/Artistes', name: 'ArtistesView', component: ArtistesView },

    // ici les autres routes
  ]
})

export default router
