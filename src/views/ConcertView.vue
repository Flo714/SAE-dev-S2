<template>
    <h1 class="py-8 md:text-4xl md:pt-8 lg:text-5xl">Les concerts</h1>
    <p class="responsivetext">Les concerts sont accessible à tous et selon le programme prédéfinie que vous pouvez consultez ici.</p>

    <div class="flex justify-end my-8">
      <RouterLink to="/Programme"><Bouton Nom="Consulter le programme"/></RouterLink>
    </div>

    <img class="w-[70%] rounded-lg lg:max-w-[600px]" src="../../public/img-squirrel/img-groupe.webp" alt="Image d'un groupe">
    <p class="ml-8 mr-4 my-3 responsivetext">Venez assister aux concerts pour une fête conviviale et familiale. Il se déroule tous les jours pour une durée d’environ 2 à 3 heures</p>

    <section>
        <h2 class="my-6 md:text-2xl">Accéder aux concerts</h2>

        <img class="w-[70%] block m-auto rounded-xl my-4 lg:max-w-[600px]" src="../../public/img-squirrel/Carte Germagny.webp" alt="Carte de Germagny">

        <p class="pt-4 pb-8 responsivetext mx-20">Les concerts se déroule à l’interieur du festival. Vous pourrez donc y accéder par le parking</p>
    </section>
</template>

<script>
import Bouton from "../../src/components/BoutonView.vue"

export default {
  name: "App",
  components: { Bouton },
};
</script>