<template>
  <h1 class="py-8">Les artistes</h1>

  <div  class="my-6">
      <Card
          Nom="Annabelle Rogelet"
          Role="Violoncelliste"
          Bio="Joue dans plusieurs groupes"
          Jour="Samedi et Dimanche"
          Image="/public/img-squirrel/Annabelle_Rogelet.webp"/>
  </div>
  <hr class="bg-jaune h-1 rounded-full w-1/2 m-auto"/>
  <div>
      <Card class="my-6"
          Nom="Les Mauvaises Herbes"
          Role="Jazz, Chanson classique"
          Bio="S’adapte à tout style de musique"
          Jour="Vendredi"
          Image="/public/img-squirrel/Les_oiseaux_de_passage.webp"/>
  </div>
  <hr class="bg-jaune h-1 rounded-full w-1/2 m-auto"/>
  <div>
      <Card class="my-6"
          Nom="Louise Jallu"
          Role="Bandonéoniste"
          Bio="Nominé aux Victoires du Jazz"
          Jour="Samedi et Dimanche"
          Image="/public/img-squirrel/Louise_Jallu.webp"/>
  </div>
  <hr class="bg-jaune h-1 rounded-full w-1/2 m-auto"/>
  <div>
      <Card class="my-6"
          Nom="Les Oiseaux de Passage"
          Role="Pop, Jazz ..."
          Bio="Reprises de chansons de Georges Brassens"
          Jour="Samedi"
          Image="/public/img-squirrel/Les_oiseaux_de_passage.webp"/>
  </div>
  <hr class="bg-jaune h-1 rounded-full w-1/2 m-auto"/>
  <div>
      <Card class="my-6"
          Nom="L’Otite Orphéonique"
          Role="Jazz"
          Bio="Orchestre forains"
          Jour="Samedi et Dimanche"
          Image="/public/img-squirrel/Les_oiseaux_de_passage.webp"/>
  </div>
  <hr class="bg-jaune h-1 rounded-full w-1/2 m-auto"/>
  <div>
      <Card class="my-6"
          Nom="Crystal Duet"
          Role="Contre-ténor"
          Bio="Groupe qui fait traverser le temps"
          Jour="Dimanche"
          Image="/public/img-squirrel/Les_oiseaux_de_passage.webp"/>
  </div>
</template>

<script>
import Card from "../../src/components/CardView.vue"

export default {
  name: "App",
  components: { Card },
};
</script>