<template>
    <h1 class="py-8 md:text-4xl md:pt-12 lg:text-5xl">Les artistes</h1>
    <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(300px,2fr))] gap-8 py-10">
        <div>
            <Card
                Nom="Annabelle Rogelet"
                Role="Violoncelliste"
                Bio="Joue dans plusieurs groupes"
                Jour="Samedi et Dimanche"
                Image="/public/img-squirrel/Annabelle_Rogelet.webp"/>
        </div>
        <div>
            <Card
                Nom="Les Mauvaises Herbes"
                Role="Jazz, Chanson classique"
                Bio="S’adapte à tout style de musique"
                Jour="Vendredi"
                Image="/public/img-squirrel/Les_oiseaux_de_passage.webp"/>
        </div>
        <div>
            <Card
                Nom="Louise Jallu"
                Role="Bandonéoniste"
                Bio="Nominé aux Victoires du Jazz"
                Jour="Samedi et Dimanche"
                Image="/public/img-squirrel/Louise_Jallu.webp"/>
        </div>
        <div>
            <Card
                Nom="Les Oiseaux de Passage"
                Role="Pop, Jazz ..."
                Bio="Reprises de chansons de Georges Brassens"
                Jour="Samedi"
                Image="/public/img-squirrel/Les_oiseaux_de_passage.webp"/>
        </div>
        <div>
            <Card
                Nom="L’Otite Orphéonique"
                Role="Jazz"
                Bio="Orchestre forains"
                Jour="Samedi et Dimanche"
                Image="/public/img-squirrel/Les_oiseaux_de_passage.webp"/>
        </div>
        <div>
            <Card
                Nom="Crystal Duet"
                Role="Contre-ténor"
                Bio="Groupe qui fait traverser le temps"
                Jour="Dimanche"
                Image="/public/img-squirrel/Les_oiseaux_de_passage.webp"/>
        </div>
    </div>
</template>

<script>
import Card from "../../src/components/CardView.vue"

export default {
  name: "App",
  components: { Card },
};
</script>