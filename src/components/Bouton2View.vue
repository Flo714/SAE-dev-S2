<template>
    <button class="bg-jaune hover:text-jaune hover:bg-marron+ rounded-xl p-2 px-1 font-bold w-1/2 text-center">{{ Nom }}</button> 
</template>
<script>

export default{

    props : {
        Nom: String,
    }
};
</script>