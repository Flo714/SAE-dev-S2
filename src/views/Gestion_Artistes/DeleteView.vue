<template>
    <div>
        <h1 class="py-8 md:text-4xl md:pt-8 lg:text-5xl">Supprimer un artiste</h1>

        <section class="pb-6 mx-2 md:max-w-[70%] md:m-auto lg:max-w-[50%] lg:pb-14">
            <form enctype="multipart/form-data"
                @submit.prevent="updateArtistes">
                <div class="bg-marron dark:bg-Dark-marron p-2 rounded-xl flex gap-2">
                    <div class="mx-auto flex flex-col justify-end mb-10">
                        <div class="m-auto">
                            <img class="" :src="photoActuelle"/>
                        </div>
                        <label class="bg-jaune hover:text-jaune hover:bg-marron+ rounded-xl p-3 font-bold text-center" for="file" required>
                            <input type="file" class="hidden" ref="file" id="file"
                            @change="previewImage">
                            Selectionner une image
                        </label>
                    </div>
                    <div class="m-auto">
                        <label class="flex flex-col mb-3">
                            <span class="font-semibold my-1" >Nom :  </span>
                            <input class="bg-jaune rounded-xl border-none w-80" type="text" placeholder="Nom de la personne" required
                                v-model="Artistes.Nom" />  
                        </label>
                        <label class="flex flex-col mb-3">
                            <span class="font-semibold my-1">Catégorie :</span>
                                <input v-model="Artistes.Role"
                                    class="bg-jaune rounded-xl border-none" type="text" placeholder="Role de la personne" required />
                        </label>
                        <label class="flex flex-col mb-3">
                            <span class="font-semibold my-1">Biographie :  </span>
                            <input v-model="Artistes.Bio"
                                class="bg-jaune rounded-xl border-none" type="text" placeholder="Biographie required" required>
                        </label>
                        <label class="flex flex-col mb-3">
                            <span class="font-semibold my-1">Jours de disponibilité :</span>
                            <input v-model="Artistes.Jour"
                                class="bg-jaune rounded-xl border-none" type="text" placeholder="Les disponibilité" required>
                        </label>
                        <div class="mb-28 ">
                            <div class="absolute bg-jaune rounded-xl p-2 left-[30%]">
                                <h3 class="text-xl text-center ">
                                    Attention vous allez supprimer ce participant, cette action est irréversible !!
                                </h3>
                            </div>

                        </div>
                        <div class="flex justify-between gap-10 my-4">
                            <button type="submit" @click.prevent="deleteArtistes(Artistes)">
                                <Bouton2 class="w-32" Nom="Supprimer"/>
                            </button>

                            <RouterLink to="/Artistes" >
                                <button type="submit">
                                    <Bouton2 class="w-20" Nom="Annuler"/>
                                </button>
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    </div>
</template>

<script>
import Bouton2 from "../../components/Bouton2View.vue"

import { 
    getFirestore, 
    collection, 
    doc, 
    getDoc,
    getDocs, 
    addDoc, 
    updateDoc, 
    setDoc,
    deleteDoc, 
    onSnapshot,
    query,
    orderBy } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'

import {
    getStorage,
    ref,
    getDownloadURL,
    uploadBytes,
    uploadString,
    deleteObject,
    listAll
    } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'

// import { preview } from "vite";


export default {
    data (){
        return {
            Artistes: {
                Nom:null,
                Role:null,
                Bio:null,
                Jour:null,
                photo:null,
            },
            refArtistes:null,
            photoActuelle:null,
        }
    },
    name: "CréationView",
    components: { Bouton2 },

    mounted (){
        this.getArtistes(this.$route.params.id);
    },

    methods :{

        async getArtistes(id){
            // Obtenir Firestore
            const firestore = getFirestore();
            // Base de données (collection)  document participant
            // Récupération sur Firestore du participant via son id
            const docRef = doc(firestore, "Artistes", id);
            // Référence du participant concerné
            this.refArtistes = await getDoc(docRef);
            // Test si le participant demandé existe
            if(this.refArtistes.exists()){
                // Si oui on récupère ses données
                this.Artistes = this.refArtistes.data();
                // Mémorisation photoActuelle
                this.photoActuelle = this.Artistes.photo;
            }else{
                // Sinon simple message d'erreur
                this.console.log("Artistes inexistant");
            }
            // Obtenir le Storage
            const storage = getStorage();
            // Référence de l'image du participant
            const spaceRef = ref(storage, 'Artistes/'+this.Artistes.photo);
            // Récupération de l'url complète de l'image
            getDownloadURL(spaceRef)
                .then((url) => {
                    // Mise à jour de l'image prévisualisée
                    this.photoActuelle = url;
            })
            .catch((error) =>{
                console.log('erreur downloadUrl', error);
            })
        },

        async deleteArtistes(){
            const firestore = getFirestore();
            // Suppresion du Artistes
            await deleteDoc(doc(firestore, "Artistes", this.$route.params.id));

            // Suppresson de l'image
            const storage = getStorage();
            // Référence du fichier de la photo
            let docRef = ref(storage, 'Artistes/'+this.Artistes.photo);
            // Suppression du fichier
            deleteObject(docRef);

            // redirection sur la liste des Artistes
            this.$router.push('/Artistes');       
        }
    }
};

</script>