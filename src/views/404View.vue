<template>
<div class="flex items-center justify-center w-full">
      <div class="flex flex-col items-center justify-center">
        <div>
            <h1 class="font-bold text-6xl mt-8">Erreur 404</h1>
            <p class="my-2 text-2xl font-bold text-center"><span class="text-marron">Oops!</span> Page non trouvée</p>
        </div>

        <p class="mt-4 text-center md:text-lg">La page que vous recherchez n'existe pas...</p>
        <RouterLink to="/"><Bouton class="my-8" Nom="Accueil"/></RouterLink>
        <p class="mb-8 text-center">Vous cherchiez peut-être ?</p>

        <div class="grid grid-cols-3 text-center gap-4">
            <div>
                <div><RouterLink to="/Programme"><Bouton class="my-4" Nom="Voir le programme"/></RouterLink></div>
                <div><RouterLink to="/Artistes"><Bouton class="my-4" Nom="Les artistes"/></RouterLink></div>
            </div> 
            <div>
                <div><RouterLink to="/Festival"><Bouton class="my-4" Nom="Le festival"/></RouterLink></div>
                <div><RouterLink to="/Concert"><Bouton class="my-4" Nom="Le concert"/></RouterLink></div>
            </div>
                <div><RouterLink to="/Contact"><Bouton class="my-4" Nom="Nous contacter"/></RouterLink></div>
        </div>
    </div>
</div>
    <form action="https://google.com/" method="GET" class="flex flex-col p-6 my-10"
            x-data="{ q:'', }" 
            x-on:submit="q = q + ' site:tradi-val.flo-demortiere.fr'">
            <label for="q" class="text-center my-4">Que cherchez vous ? </label>
            <input type="text" class="border bg-white mx-[10%]" placeholder="Rechercher" id="q" name="q" x-model="q">
            <Bouton class="my-4 w-1/2 m-auto" type="submit" Nom="Rechercher"/>
    </form>
</template>

<script>
import Logo from "../components/icons/LogoView.vue"
import Bouton from "../components/BoutonView.vue"

export default {
    name:"App",
    components: { Logo, Bouton },
}
</script>