<template>
    <section>
        <h1 class="text-center py-6 md:text-4xl md:py-12">Un lieu convivial et familial, c’est le Tradi’Val</h1>

        <img class="rounded-md ml-2 w-[70%]" src="../../public/img-squirrel/img-accueil.webp" alt="Image du Festival">

        <p class="ml-20 my-4 responsivetext md:ml-32 md:mt-8">Le Tradi’Val est un festival de chansons traditionnelles qui se déroule à Germagny, en Saône et Loire. Venez nous rejoindre le 5, 6 et 7 Août 2022</p>
    </section>
        <Formeaccueil class="my-10 md:hidden"/>
        <Formeaccueil2 class="hidden md:flex my:10"/>
    <section>
        <h2 class="mr-4 md:text-2xl">Le Tradi'Val vous accueille les 5, 6 et 7 Août à Germagny !</h2>

        <p class="my-4 responsivetext">Au Tradi’Val, nous saurons vous accueillir avec des chansons traditionnelles, des décors renversants et des magnifiques chanteurs.</p>
        <div class="flex justify-end ml-6 my-8">
            <RouterLink to="/Artistes"><Bouton class="" Nom="Voir les chanteurs"/></RouterLink>
        </div>
    </section>
    <section>
        <h2 class="md:text-2xl">Programme</h2>
        <div class="flex justify-end mr-6 my-6">
            <RouterLink to="/Programme"><Bouton Nom="Voir le Programme en entier"/></RouterLink>
        </div>
       
    </section>
    <section>
        <h2 class="md:text-2xl">Les artistes</h2>
        <p class="my-4 mr-10 responsivetext">Voici quelques artistes qui seront présents lors du Tradi’Val</p>
        <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 py-10">
            <div  class="my-2">
                <Card class=""
                    Nom="Annabelle Rogelet"
                    Role="Violoncelliste"
                    Bio="Joue dans plusieurs groupes"
                    Jour="Samedi et dimanche"
                    Image="/public/img-squirrel/Annabelle_Rogelet.webp"/>
            </div>
            <div>
                <Card
                    Nom="Louise Jallu"
                    Role="Bandonéoniste"
                    Bio="Nominé aux Victoires du Jazz"
                    Jour="Samedi et dimanche"
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
        </div>
    </section>
</template>
<script>

import Forme from "../../src/components/formeView.vue"
import Formeaccueil from "../../src/components/formeaccueilView.vue"
import Formeaccueil2 from "../../src/components/formeaccueil2View.vue"
import Bouton from "../../src/components/BoutonView.vue"
import Card from "../../src/components/CardView.vue"


export default {
  name: "App",
  components: { Forme, Formeaccueil, Bouton, Card, Formeaccueil2, },
};
</script>