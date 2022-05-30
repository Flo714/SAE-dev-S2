<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>
<template>
  <header>
    <div class="flex justify-between p-1 bg-marron">
      <RouterLink to="/"><Logo class="ml-2"/></RouterLink>

      <p class="text-jaune text-4xl font-bold mt-8">Tradi'Val</p>

      <Menu class="m-3 mt-4 justify-end" />
    </div>
  </header>
  <main class="bg-fond px-4">
    <Router-View />
  </main>
  <footer class="bg-marron p-4">
    <div>
      <h4 class="my-6">Liens</h4>
      <ul>
        <RouterLink to="/Programme"><li class="text-jaune m-2 font-medium">Programmation</li></RouterLink>
        <RouterLink to="/Artistes"><li class="text-jaune m-2 font-medium">Les artistes</li></RouterLink>
        <RouterLink to="/Festival"><li class="text-jaune m-2 font-medium">Le festival</li></RouterLink>
        <RouterLink to="/Concert"><li class="text-jaune m-2 font-medium">Les concerts</li></RouterLink>
        <RouterLink to="/Contact"><li class="text-jaune m-2 font-medium">Nous contacter</li></RouterLink>
      </ul>
    </div>
    <div>
      <h4 class="my-6">Obtenir de l’aide</h4>
      <div>
        <a class="text-jaune m-2 font-medium" href="mailto:Tradi-val@gmail.com">Tradi-val@gmail.com</a>
      </div>
    </div>
    <div>
      <h4 class="my-6">Informations</h4>
      <div>
        <RouterLink class="text-jaune m-2 font-medium" to="/Mentionlegal">Mentions Légales</RouterLink>
      </div>
    </div>
    <div class="mb-4">
      <h4 class="my-6">Suivez nous</h4>
      <div class="flex gap-4">
        <Facebook/>
        <Instagram/>
        <Twitter/>
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


export default {
  name: "App",
  components: { Menu, Logo, Facebook, Instagram, Twitter },
};
</script>
