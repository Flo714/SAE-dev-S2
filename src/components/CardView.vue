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
    </div>
    <div class="flex justify-center gap-10 mt-1">
        <RouterLink class="" :to="{ name:'ModificationView', params: {id}}">
            <button class="bg-jaune rounded-lg mb-2 p-1 hover:bg-hover dark:hover:text-Dark-marron duration-300" type="button" title="Modification">
              <Modifier />
            </button>
        </RouterLink>
        <RouterLink class="" :to="{ name:'DeleteView', params: {id}}">
            <button class="bg-jaune rounded-lg mb-2 p-1 hover:bg-hover dark:hover:text-Dark-marron duration-300" type="button" title="Suppression">
              <Delete />
            </button>
        </RouterLink>
    </div>
</div>
</template>
<script>
import Modifier from "../../src/components/icons/ModifierView.vue"
import Delete from "../../src/components/icons/DeleteView.vue"

export default {
    components: {Modifier, Delete },

    props : {
        Nom: String,
        Role: String,
        Bio: String,
        Jour: String,
        photo: String,
        id:String,
    },
};
</script>