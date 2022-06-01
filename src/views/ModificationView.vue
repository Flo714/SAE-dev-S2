<template>
    <h1 class="py-8">Modifier les artistes</h1>

    <section class="pb-6 mx-2 md:max-w-[70%] md:m-auto lg:max-w-[50%] lg:pb-14">
        <div class="bg-marron dark:bg-Dark-marron p-2 rounded-xl">
            <label class="flex flex-col mb-3">
                <span class="font-semibold my-1">Nom :  </span>
                <input type="text" class="bg-jaune rounded-xl border-none" placeholder="nom">
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
    </section>
</template>

<script>
import Bouton2 from "../../src/components/Bouton2View.vue"

export default {
  name: "App",
  components: { Bouton2 },
};

</script>