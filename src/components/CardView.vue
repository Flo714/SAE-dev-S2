<template>
<div class="bg-Dark-marron rounded-xl px-4 pt-3 shadow-card">
    <div class="flex">
        <img class="rounded-xl w-1/3" :src="photo" alt="Image de l'artiste">
        <div class="mx-4">
            <h3 class="text-base">{{ Nom }}</h3>
            <p class="text-xs ml-2">{{ Role }}</p>
            <p class="text-sm mt-4 md:text-lg lg:text-xl">{{ Bio }}</p>
        </div>
    </div>
    <div>
        <p class="text-[0.600rem] flex justify-end">{{ Jour }}</p>
        <RouterLink to="/Modification">
            <button class="" type="button" @click.prevent="updateArtistes(Artistes)" title="Modification">
              <Modifier />
            </button>
        </RouterLink>
    </div>
    
</div>
</template>
<script>
import Modifier from "../components/icons/ModifierView.vue"

export default {
    name:"App",
    components: { Modifier, },

    props : {
        Nom: String,
        Role: String,
        Bio: String,
        Jour: String,
        photo: String,
    }
};
</script>