<template>
    <button class="bg-Dark-marron rounded-xl p-2 px-3 text-jaune font-extrabold text-center md:p-4 md:px-5 md:text-lg lg:p-6 lg:px-7 lg:text-xl hover:text-marron hover:bg-hover dark:hover:text-Dark-marron duration-300">{{ Nom }}</button>
</template>
<script>

export default {
    props : {
        Nom: String,
    }
};
</script>