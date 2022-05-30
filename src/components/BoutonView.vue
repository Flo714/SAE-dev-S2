<template>
    <button class="bg-marron rounded-xl p-2 px-3 text-jaune font-extrabold w-1/2 text-center">{{ Nom }}</button>
</template>
<script>

export default {
    props : {
        Nom: String,
    }
};
</script>