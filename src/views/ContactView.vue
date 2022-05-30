<template>
    <h1>Nous contacter </h1>
    <p>Vous pouvez nous contacter en remplissant le formulaire ci-dessous.</p>
    <section>
        <div>
            <label class="flex flex-col">
                <span>Nom :  </span>
                <input type="text" class="" placeholder="Votre nom">
            </label>
            <label class="flex flex-col">
                <span>Prénom :  </span>
                <input type="text" class="" placeholder="Votre prénom">
            </label>
            <label class="flex flex-col">
                <span>Mail :  </span>
                <input type="email" class="" placeholder="john@exemple.com">
            </label>
            <label class="flex flex-col">
                <span>Message :</span>
                <textarea class="" rows="3" ></textarea>
            </label>
            <!-- Bouton Envoyer -->
            <button></button>
        </div>
    </section>
</template>

<script>
// import  from ""

export default {
  name: "App",
  components: {  },
};
</script>