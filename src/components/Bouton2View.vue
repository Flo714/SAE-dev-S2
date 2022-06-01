<template>
    <button class="bg-jaune hover:bg-marron rounded-xl p-2 px-1 font-bold w-1/3 text-center">{{ Nom }}</button> 
</template>
<script>

export default{

    props : {
        Nom: String,
    }
};
</script>