<template>
    <div>
        <h1 class="py-8 md:text-4xl md:pt-8 lg:text-5xl">Créer les artistes</h1>

        <section class="pb-6 mx-2 md:max-w-[70%] md:m-auto lg:max-w-[50%] lg:pb-14">
            <form enctype="multipart/form-data"
                @submit.prevent="createArtistes">
                <div class="bg-marron dark:bg-Dark-marron p-2 rounded-xl flex gap-2">
                    <div class="mx-auto flex flex-col justify-end mb-10">
                        <div class="m-auto">
                            <img class="" :src="imageData"/>
                        </div>
                        <label class="bg-jaune hover:text-jaune hover:bg-marron+ rounded-xl p-3 font-bold text-center" for="file">
                            <input type="file" class="hidden" ref="file" id="file" required
                            @change="previewImage">
                            Selectionner une image
                        </label>
                    </div>
                    <div class="m-auto">
                        <label class="flex flex-col mb-3">
                            <span class="font-semibold my-1" >Nom :  </span>
                            <input class="bg-jaune rounded-xl border-none w-80" type="text" placeholder="Nom de la personne"
                                v-model="Artistes.Nom" required />  
                        </label>
                        <label class="flex flex-col mb-3">
                            <span class="font-semibold my-1">Catégorie :</span>
                                <input v-model="Artistes.Role"
                                    class="bg-jaune rounded-xl border-none" type="text" placeholder="Role de la personne" required />
                        </label>
                        <label class="flex flex-col mb-3">
                            <span class="font-semibold my-1">Biographie :  </span>
                            <input v-model="Artistes.Bio"
                                class="bg-jaune rounded-xl border-none" type="text" placeholder="Biographie" required>
                        </label>
                        <label class="flex flex-col mb-3">
                            <span class="font-semibold my-1">Jours de disponibilité :</span>
                            <input v-model="Artistes.Jour"
                                class="bg-jaune rounded-xl border-none" type="text" placeholder="Les disponibilité" required>
                        </label>
                        <div class="flex justify-between gap-10 my-4">
                            <button type="submit">
                                <Bouton2 class="w-32" Nom="Créer"/>
                            </button>

                            <RouterLink to="/Artistes" >
                                <button type="submit">
                                    <Bouton2 class="w-20" Nom="Retour"/>
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
    getDocs, 
    addDoc, 
    updateDoc, 
    deleteDoc, 
    onSnapshot,
    query,
    orderBy } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'

import {
    getStorage,
    ref,
    getDownloadURL,
    uploadString,
    } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'

// import { preview } from "vite";


export default {
    data (){
        return {
            imageData:null,
            Artistes: {
                Nom:null,
                Role:null,
                Bio:null,
                Jour:null,
                photo:null,
            }
        }
    },
    name: "CréationView",
    components: { Bouton2 },

    mounted (){
        this.getArtistes();
    },

    methods : {
        async getArtistes (){
            const firestore = getFirestore();
            const dbArtistes = collection(firestore, "Artistes");
            const q = query(dbArtistes, orderBy('Nom','asc'));
            await onSnapshot(q, (snapshot) => {
                this.listeArtistes = snapshot.docs.map(doc => (
                    {id:doc.id, ...doc.data()}
                ))
        console.log("Liste des Artistes", this.listeArtistes)
            })
        },
        previewImage: function(event) {
            //debugger
            this.file = this.$refs.file.files[0];
            this.Artistes.photo = this.file.name;
            var input = event.target;
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = (e) => {
                    this.imageData = e.target.result;
                }
                reader.readAsDataURL(input.files[0]);
            }
        },
        async createArtistes(){
            const storage = getStorage();
            const refStorage = ref(storage, 'Artistes/'+this.Artistes.photo);
            await uploadString(refStorage, this.imageData, 'data_url').then((snapshot) => {
                console.log('Uploaded a base64 string');
                const db = getFirestore();
                const docRef = addDoc(collection(db, 'Artistes'), this.Artistes);
            });
            this.$router.push('/Artistes')
        },

    },
};

</script>