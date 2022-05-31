<template>
    <h1 class="py-8 md:text-4xl md:pt-8 lg:text-5xl">Nous contacter </h1>
    <p class="mb-4 responsivetext">Vous pouvez nous contacter en remplissant le formulaire ci-dessous.</p>
    <section class="pb-6 mx-2 md:max-w-[70%] md:m-auto lg:max-w-[50%] lg:pb-14">
        <div class="bg-marron p-2 rounded-xl">
            <label class="flex flex-col mb-3">
                <span class="font-semibold my-1">Nom :  </span>
                <input type="text" class="bg-jaune rounded-xl border-none" placeholder="Votre nom">
            </label>
            <label class="flex flex-col mb-3">
                <span class="font-semibold my-1">Prénom :  </span>
                <input type="text" class="bg-jaune rounded-xl border-none" placeholder="Votre prénom">
            </label>
            <label class="flex flex-col mb-3">
                <span class="font-semibold my-1">Mail :  </span>
                <input type="email" class="bg-jaune rounded-xl border-none" placeholder="john@exemple.com">
            </label>
            <label class="flex flex-col mb-3">
                <span class="font-semibold my-1">Message :</span>
                <textarea class="bg-jaune rounded-xl border-none" placeholder="Votre message" rows="3" ></textarea>
            </label>
            <div class="flex justify-end mt-8 mb-2 mr-4">
                <Bouton2 Nom="Envoyer"/>
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