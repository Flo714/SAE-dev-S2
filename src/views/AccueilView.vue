<template>
    <section>
        <h1 class="text-center py-6 md:text-4xl md:py-12 lg:text-5xl">Un lieu convivial et familial, c’est le Tradi’Val</h1>

        <img class="rounded-md ml-2 w-[70%] lg:max-w-[600px] xl:ml-20" src="../../public/img-squirrel/img-accueil.webp" alt="Image du Festival">

        <p class="ml-20 my-4 responsivetext md:ml-32 md:mt-8 lg:ml-40">Le Tradi’Val est un festival de chansons traditionnelles qui se déroule à Germagny, en Saône et Loire. Venez nous rejoindre le 5, 6 et 7 Août 2022</p>
    </section>
        <div class="absolute top-[135vw] left-[10vw] sm:top-[80vw] md:top-[93vw] lg:top-[75vw] xl:top-[50vw] xl:left-[15vw] bg-hexa bg-contain w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 bg-no-repeat text-center items-center mt-5">
            <p class="font-bold text-base md:text-lg lg:text-2xl xl:text-3xl mt-5 mr-3 sm:mt-7 md:mr-5 lg:mt-10 xl:mt-12">3 jours de folie</p>
        </div>
        <div class="absolute top-[120vw] left-[40vw] sm:top-[75vw] md:top-[85vw] lg:top-[70vw] xl:top-[45vw] xl:left-[40vw] bg-hexa bg-contain w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 bg-no-repeat text-center">
            <p class="font-bold text-base md:text-lg lg:text-xl xl:text-2xl mt-5 mr-3 sm:mt-7 md:mr-5 lg:mt-10 xl:mt-14">Germagny</p>
            <p class="text-[9px] md:text-[10px] xl:text-[11px] font-bold mr-3 md:mr-5">(Saône et Loire)</p>
        </div>
        <div class="absolute top-[143vw] left-[65vw] sm:top-[83vw] md:top-[95vw] lg:top-[80vw] xl:top-[53vw] xl:left-[70vw] bg-hexa bg-contain w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 bg-no-repeat text-center ">
            <p class="font-bold text-xs md:text-base lg:text-lg xl:text-xl mt-6 mr-3 sm:mt-7 md:mr-4 md:mt-8 lg:mr-5 lg:mt-10 xl:mt-12">Des chansons traditionnelles</p>
        </div>
    <section class="mt-48 md:mt-56 lg:mt-72 xl:mt-80">
        <h2 class="mr-4 md:text-2xl lg:text-3xl">Le Tradi'Val vous accueille les 5, 6 et 7 Août à Germagny !</h2>

        <p class="my-4 responsivetext">Au Tradi’Val, nous saurons vous accueillir avec des chansons traditionnelles, des décors renversants et des magnifiques chanteurs.</p>
        <div class="flex justify-end ml-6 my-8 mr-16">
            <RouterLink to="/Artistes"><Bouton Nom="Voir les chanteurs"/></RouterLink>
        </div>
    </section>
    <section>
        <h2 class="md:text-2xl lg:text-3xl">Programme</h2>
        <div class="flex justify-end mr-4 xl:mr-24 py-12">
            <RouterLink to="/Programme"><Bouton Nom="Voir le Programme en entier"/></RouterLink>
        </div>
       
    </section>
</template>
<script>

import Forme from "../../src/components/formeView.vue"
import Bouton from "../../src/components/BoutonView.vue"
import Card from "../../src/components/CardView.vue"


export default {
  name: "App",
  components: { Forme, Bouton, Card,},
};
</script>