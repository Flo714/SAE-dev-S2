import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ProgrammeView from '../views/ProgrammeView.vue'
import ArtistesView from '../views/ArtistesView.vue'
import FestivalView from '../views/FestivalView.vue'
import ContactView from '../views/ContactView.vue'
import ConcertView from '../views/ConcertView.vue'
import MentionlegalView from '../views/MentionlegalView.vue'
import styleguideView from '../views/styleguideView.vue'
import Page404View from '../views/404View.vue'
import CreationView from '../views/CreationView.vue'
import ModificationView from '../views/ModificationView.vue'
import DeleteView from '../views/DeleteView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'AccueilView', component: AccueilView },
    { path: '/Programme', name: 'ProgrammeView', component: ProgrammeView },
    { path: '/Artistes', name: 'ArtistesView', component: ArtistesView },
    { path: '/Festival', name: 'FestivalView', component: FestivalView },
    { path: '/Contact', name: 'ContactView', component: ContactView },
    { path: '/Concert', name: 'ConcertView', component: ConcertView },
    { path: '/MentionLegal', name: 'MentionLegalView', component: MentionlegalView },
    { path: '/style-guide', name: 'styleguideView', component: styleguideView },
    { path: '/:pathMatch(.*)*', name: 'Page404View', component: Page404View },
    { path: '/Creation', name: 'CreationView', component: CreationView },
    { path: '/Modification', name: 'ModificationView', component: ModificationView },
    { path: '/Delete', name: 'DeleteView', component: DeleteView },
    // ici les autres routes
  ]
})

export default router
