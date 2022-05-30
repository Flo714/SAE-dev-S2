<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>
<template>
  <header>
    <div>
      <Logo />

      <p>Tradi'Val</p>

      <MenuIcon class="w-20"/>
    </div>
  </header>
  <main>
    <Router-View />
  </main>
  <footer>
    <div>
      <h4>Liens</h4>
      <div>
        <p>Programmation</p>
        <p>Les artistes</p>
        <p>Le festival</p>
        <p>Les concerts</p>
        <p>Nous contacter</p>
      </div>
    </div>
    <div>
      <h4>Obtenir de l’aide</h4>
      <div>
        <p>Tradi-val@gmail.com</p>
      </div>
    </div>
    <div>
      <h4>Informations</h4>
      <div>
        <p>Mentions Légales</p>
      </div>
    </div>
    <div>
      <h4>Suivez nous</h4>
      <div>
        <Facebook />
        <Instagram />
        <Twitter />
      </div>
    </div>
  </footer>
</template>

<script>

import { MenuIcon } from "@heroicons/vue/solid";
import Logo from "../src/components/icons/LogoView.vue"
import Facebook from "../src/components/icons/FacebookView.vue"
import Instagram from "../src/components/icons/InstagramView.vue"
import Twitter from "../src/components/icons/TwitterView.vue"


export default {
  name: "App",
  components: { MenuIcon, Logo, Facebook, Instagram, Twitter },
};
</script>
