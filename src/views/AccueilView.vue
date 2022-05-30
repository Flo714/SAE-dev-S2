<template>
    <section>
        <h1 class="text-center py-6">Un lieu convivial et familial, c’est le Tradi’Val</h1>

        <img class="rounded-md ml-2 w-[70%]" src="../../public/img-squirrel/img-accueil.webp" alt="Image du Festival">

        <p class="ml-20 my-4">Le Tradi’Val est un festival de chansons traditionnelles qui se déroule à Germagny, en Saône et Loire. Venez nous rejoindre le 5, 6 et 7 Août 2022</p>
    </section>
    <Formeaccueil class="my-10"/>
    <section>
        <h2 class="mr-4">Le Tradi'Val vous accueille les 5, 6 et 7 Août à Germagny !</h2>
        
        <p class="my-4">Au Tradi’Val, nous saurons vous accueillir avec des chansons traditionnelles, des décors renversants et des magnifiques chanteurs.</p>
        <div class="flex justify-end ml-10 my-8">
            <Bouton class="" Nom="Voir les chanteurs"/>
        </div>
    </section>
    <section>
        <h2>Programme</h2>
        <div class="flex justify-end mr-6 my-6">
            <Bouton Nom="Voir le Programme en entier"/>
        </div>
       
    </section>
    <section>
        <h2>Les artistes</h2>
        <p class="my-4 mr-10">Voici quelques artistes qui seront présents lors du Tradi’Val</p>

        <div  class="my-6">
            <Card
                Nom="Annabelle Rogelet"
                Role="Violoncelliste"
                Bio="Joue dans plusieurs groupes"
                Jour="Samedi et dimanche"
                Image="/public/img-squirrel/Annabelle_Rogelet.webp"/>
        </div>
        <hr class="bg-jaune h-1 rounded-full w-1/2 m-auto"/>
        <div>
            <Card class="my-6"
                Nom="Louise Jallu"
                Role="Bandonéoniste"
                Bio="Nominé aux Victoires du Jazz"
                Jour="Samedi et dimanche"
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
            
    </section>
</template>
<script>

import Forme from "../../src/components/formeView.vue"
import Formeaccueil from "../../src/components/formeaccueilView.vue"
import Bouton from "../../src/components/BoutonView.vue"
import Card from "../../src/components/CardView.vue"

export default {
  name: "App",
  components: { Forme, Formeaccueil, Bouton, Card },
};
</script>