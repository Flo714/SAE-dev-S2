<template>
    <h1 class="py-8 md:text-4xl md:pt-8 lg:text-5xl">Modifier les artistes</h1>

    <section class="pb-6 mx-2 md:max-w-[70%] md:m-auto lg:max-w-[50%] lg:pb-14">
        <div class="bg-marron dark:bg-Dark-marron p-2 rounded-xl flex gap-2">
            <div class="mx-auto flex flex-col justify-end mb-10">
                <img class="mb-10 w-40 rounded-xl" src="../../public/img-squirrel/Crystal-Duet.webp" alt="Image de l'artiste">
                <Bouton2 class="w-32 mx-auto" Nom="Changer l'image"/>
            </div>
            <div class="m-auto">
                <label class="flex flex-col mb-3">
                    <span class="font-semibold my-1">Nom :  </span>
                    <input type="text" class="bg-jaune rounded-xl border-none w-80" placeholder="Nom">
                </label>
                <label class="flex flex-col mb-3">
                    <span class="font-semibold my-1">Catégorie :  </span>
                    <input type="text" class="bg-jaune rounded-xl border-none" placeholder="Catégorie">
                </label>
                <label class="flex flex-col mb-3">
                    <span class="font-semibold my-1">Biographie :  </span>
                    <input type="email" class="bg-jaune rounded-xl border-none" placeholder="Biographie">
                </label>
                <label class="flex flex-col mb-3">
                    <span class="font-semibold my-1">Jours de disponibilité :</span>
                    <input type="text" class="bg-jaune rounded-xl border-none" placeholder="Les disponibilité">
                </label>
                <div class="flex justify-end mt-8 mb-2 mr-4">
                    <Bouton2 Nom="Sauvegarder"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Bouton2 from "../../src/components/Bouton2View.vue"

export default {
  name: "App",
  components: { Bouton2 },
};

</script>