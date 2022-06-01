<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>
<template>
  <header>
    <div class="flex justify-between p-1 bg-Dark-marron">
      <RouterLink to="/"><Logo class="ml-2"/>
      <span class="sr-only">Site Du Tradi'Val</span></RouterLink>

      <p class="text-jaune text-4xl font-bold mt-8 md:text-5xl lg:hidden">Tradi'Val</p>


      <!-- Menu -->
      <button class="text-xl relative lg:hidden" aria-haspopup="true"
        aria-controls="menu" 
        :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert">
        <Menu class="m-3 mt-4 justify-end"/>
        <span class="sr-only">Menu</span>
      </button>
      <div id="menu" class="fixed inset-0 z-20 translate-x-full lg:hidden bg-marron dark:bg-Dark-marron motion-safe:duration-1000 motion-safe:transition-transform" 
        :class="{ 'translate-x-0': menuOuvert }">
        <button class="text-xl absolute top-2 right-3" aria-haspopup="true"
          aria-controls="menu"
          :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert">
          <Croix class="m-3 mt-4 justify-end hover:text-hover"/>
          <span class="sr-only">Fermer le menu</span>
        </button>
        <ul class="text-jaune font-bold text-center flex flex-col gap-12 mt-28">
          <li><RouterLink class="text-3xl hover:text-hover" to="/Programme">Programmation</RouterLink></li>
          <li><RouterLink class="text-3xl hover:text-hover" to="/Artistes">Les artistes</RouterLink></li>
          <li><RouterLink class="text-3xl hover:text-hover" to="/Festival">Le festival</RouterLink></li>
          <li><RouterLink class="text-3xl hover:text-hover" to="/Contact">Nous contacter</RouterLink></li>
          <li><RouterLink class="text-3xl hover:text-hover" to="/Concert">Le concert</RouterLink></li>
        </ul>
      </div>
      <div class="hidden lg:flex lg:text-jaune lg:gap-8 lg:mr-7 lg:mt-4">
        <RouterLink to="/Programme"><p class="text-lg font-semibold hover:text-hover">Programmation</p></RouterLink>
        <RouterLink to="/Festival"><p class="text-lg font-semibold hover:text-hover">Le festival</p></RouterLink>
        <RouterLink to="/Concert"><p class="text-lg font-semibold hover:text-hover">Les concerts</p></RouterLink>
        <RouterLink to="/Artistes"><p class="text-lg font-semibold hover:text-hover">Les artistes</p></RouterLink>
        <RouterLink to="/Contact"><p class="text-lg font-semibold hover:text-hover">Nous contacter</p></RouterLink>
      </div>
    </div>
    <a href="#content" class="sr-only focus:not-sr-only"> Passez au contenu </a>
  </header>
  <main id="content" class="bg-fond px-4 xl:px-8 dark:bg-marron">
    <Router-View />
  </main>
  <footer class="bg-marron dark:bg-Dark-marron p-6">
    <div class="max-w-6xl m-auto text-gray-900 flex flex-wrap justify-left text-lg my-6">
      <div class="w-1/2 sm:w-4/12 md:w-3/12">
        <h4 class="my-6">Liens</h4>
        <ul>
          <RouterLink to="/Programme"><li class="text-jaune m-2 font-medium hover:text-hover">Programmation</li></RouterLink>
          <RouterLink to="/Artistes"><li class="text-jaune m-2 font-medium hover:text-hover">Les artistes</li></RouterLink>
          <RouterLink to="/Festival"><li class="text-jaune m-2 font-medium hover:text-hover">Le festival</li></RouterLink>
          <RouterLink to="/Concert"><li class="text-jaune m-2 font-medium hover:text-hover">Les concerts</li></RouterLink>
          <RouterLink to="/Contact"><li class="text-jaune m-2 font-medium hover:text-hover">Nous contacter</li></RouterLink>
        </ul>
      </div>
      <div class="w-1/2 sm:w-4/12 md:w-3/12">
        <h4 class="my-6">Obtenir de l’aide</h4>
        <div>
          <a class="text-jaune m-2 font-medium text-sm hover:text-hover" href="mailto:Tradi-val@gmail.com">Tradi-val@gmail.com</a>
        </div>
      </div>
      <div class="w-1/2 sm:w-4/12 md:w-3/12">
        <h4 class="my-6">Informations</h4>
        <div>
          <RouterLink class="text-jaune m-2 font-medium text-sm hover:text-hover" to="/Mentionlegal">Mentions Légales</RouterLink>
        </div>
      </div>
      <div class="mb-4 w-1/2 sm:w-4/12 md:w-3/12">
        <h4 class="my-6">Suivez nous</h4>
        <div class="flex gap-4">
          <a href="https://fr-fr.facebook.com/"><Facebook class="hover:animate-[spin_1000ms_1] hover:bg-hover duration-700"><span class="sr-only">Lien vers Facebook</span></Facebook></a>
          <a href="https://www.instagram.com/"><Instagram class="hover:animate-[spin_1000ms_1] hover:bg-hover duration-700"><span class="sr-only">Lien vers Instagram</span></Instagram></a>
          <a href="https://twitter.com/?lang=fr"><Twitter class="hover:animate-[spin_1000ms_1] hover:bg-hover duration-700"><span class="sr-only">Lien vers Twitter</span></Twitter></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Menu from "../src/components/icons/MenuView.vue"
import Logo from "../src/components/icons/LogoView.vue"
import Facebook from "../src/components/icons/FacebookView.vue"
import Instagram from "../src/components/icons/InstagramView.vue"
import Twitter from "../src/components/icons/TwitterView.vue"
import Croix from "../src/components/icons/CroixView.vue"

export default {
  name: "App",
    data() {
    return {
      menuOuvert: false,
      };
    },
    beforeMount() {
      this.$router.afterEach(() => (this.menuOuvert = false));
    },
  components: { Menu, Logo, Facebook, Instagram, Twitter, Croix },
};
</script>
