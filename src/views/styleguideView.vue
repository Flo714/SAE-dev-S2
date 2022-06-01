<template>
    <h1 class="p-8">Style Guide</h1>

    <section class="my-6">
        <h2>Couleurs</h2>

        <div class="flex space-x-6 mt-8 ml-16">
            <div class="flex flex-col-reverse bg-marron w-20 h-24 rounded-xl">
                <p class="bg-gray-200 rounded-b-xl p-1 text-centers">#B45309</p>
            </div>
            <div class="flex flex-col-reverse bg-jaune w-20 h-24 rounded-xl">
                <p class="bg-gray-200 rounded-b-xl p-1 text-center">#FBBF24</p>
            </div>
            <div class="flex flex-col-reverse bg-fond w-20 h-24 rounded-xl border-gray-400 border-2">
                <p class="bg-gray-200 rounded-b-xl p-1 text-center ">#FEFFB8</p>
            </div>
            <div class="flex flex-col-reverse bg-black w-20 h-24 rounded-xl">
                <p class="bg-gray-200 rounded-b-xl p-1 text-center">#000000</p>
            </div>
            <div class="flex flex-col-reverse bg-white w-20 h-24 rounded-xl">
                <p class="bg-gray-200 rounded-b-xl p-1 text-center">#FFFFFF</p>
            </div>
        </div>
    </section>
    <section class="my-6">
        <h2>Typographie</h2>

        <div class="flex">
            <div>
                <p class=" text-md ml-24 mt-6 font-bold"> h1 / headline 1</p>
                <p class="ml-24 text-gray-500"> Gabo Drive</p>
                <p class="ml-24 text-gray-500"> 30px font size</p>
            </div>
            <p class="text-4xl font-gabo-drive ml-20 mt-8" >The quick brown fox jum...</p>
        </div>
        <div class="flex">
            <div>
                <p class=" text-md ml-24 mt-6 font-bold"> h2 / headline 2</p>
                <p class="ml-24 text-gray-500"> Gabo Drive</p>
                <p class="ml-24 text-gray-500"> 20px font size</p>
            </div>
            <p class="text-xl font-gabo-drive ml-20 mt-10" >The quick brown fox jumps over the laz...</p>
        </div>
        <div class="flex">
            <div>
                <p class=" text-md ml-24 mt-6 font-bold">Body</p>
                <p class="ml-24 text-gray-500"> Roboto</p>
                <p class="ml-24 text-gray-500"> 14px font size</p>
            </div>
            <p class="text-sm font-roboto ml-20 mt-10" >The quick brown fox jumps over the laz...</p>
        </div>
    </section>
    <section class="my-6">
        <h2>Icônes</h2>
        <div class="flex gap-6 ml-20 my-4">
            <Facebook class="w-10 h-10"/>
            <Instagram class="w-10 h-10"/>
            <Twitter class="w-10 h-10"/>
            <Logo class="w-10 h-10"/>
        </div>
    </section>
    <section class="py-6">
        <h2>Composants</h2>    
        <div class="flex  gap-16 ml-20 mt-6">
            <Bouton class="w-40 h-20" Nom="Exemple"/>
            <Bouton2 class="w-40 h-16" Nom="Exemple"/>
            <Card class="w-1/4 h-1/12"
                    Nom="Les Oiseaux de Passage"
                    Role="Pop, Jazz ..."
                    Bio="Reprises de chansons de Georges Brassens"
                    Jour="Samedi"
                    Image="/img-squirrel/Les_oiseaux_de_passage.webp"/>
        <div class="bg-hexa bg-contain w-24 h-24 bg-no-repeat text-center items-center">
            <p class="font-bold text-base mt-5 mr-3 ">3 jours de folie</p>
        </div>
        </div>
    </section>
</template>

<script>
import Facebook from "../../src/components/icons/FacebookView.vue"
import Instagram from "../../src/components/icons/InstagramView.vue"
import Twitter from "../../src/components/icons/TwitterView.vue"
import Logo from "../../src/components/icons/LogoView.vue"
import Bouton from "../../src/components/BoutonView.vue"
import Bouton2 from "../../src/components/Bouton2View.vue"
import Card from "../../src/components/CardView.vue"

export default {
  name: "App",
  components: { Facebook, Instagram, Twitter, Logo, Bouton, Bouton2, Card },
};

</script>