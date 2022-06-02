<template>
    <div>
        <h1 class="py-8 md:text-4xl md:pt-8 lg:text-5xl">Créer les artistes</h1>


        <div class="">
        <form enctype="multipart/form-data"
            @submit.prevent="createArtistes">
            <div class="">

                <div class="">   
                    <div class="">
                        <div class="">
                            <div>
                                <img class="" :src="imageData"/>
                            </div>
                        </div>

                        <div class="">
                            <div class="">
                                <div class="">
                                    <span class="" >Nom</span>
                                </div>
                                <input 
                                    class="" placeholder="Nom de la personne"
                                    v-model="Artistes.Nom" required />                    
                            </div>
                            <br/>
                            <div class="">
                                <div class="">
                                    <span class="" >Role</span>
                                </div>
                                <input 
                                    v-model="Artistes.Role"
                                    class="" placeholder="Role de la personne"
                                    required />                    
                            </div>
                            <br/>
                            <div class="">
                                <div class="">
                                    <span class="">Photo</span>
                                </div>
                                <div class="">
                                    <input type="file" class="" ref="file" id="file"
                                    @change="previewImage"
                                    >
                                    <label class="" for="file">Sélectionner l'image</label>
                                </div>
                            </div>
                            <br/>
                            <div class="">
                                <div class="">
                                    <span class="" >Biographie</span>
                                </div>
                                <input 
                                    v-model="Artistes.Bio"
                                    placeholder="Biographie"
                                    class="" 
                                    required />                    
                            </div>
                            <br/>
                            <div class="">
                                <div class="">
                                    <span class="" >Jour</span>
                                </div>
                                <input 
                                    v-model="Artistes.Jour"
                                    placeholder="Jour"
                                    class="" 
                                    required />                    
                            </div>
                            <br/>
                        </div>
                    </div>               
                </div>

                <div class="flex gap-6">   
                    <button type="submit" class="">
                        Créer
                    </button>
                    <button class="" >
                        <RouterLink to="/Artistes" >Cancel</RouterLink>
                    </button>
                </div>

            </div>
        </form>        
        </div>

        <section class="pb-6 mx-2 md:max-w-[70%] md:m-auto lg:max-w-[50%] lg:pb-14">
        <div class="bg-marron dark:bg-Dark-marron p-2 rounded-xl flex gap-2">
            <div class="mx-auto flex flex-col justify-end mb-10">
                <img class="mb-10 w-40 rounded-xl" src="../../public/img-squirrel/Crystal-Duet.webp" alt="Image de l'artiste">
                <Bouton2 class="w-32 mx-auto" Nom="Changer l'image"/>
            </div>
            <div class="m-auto">
                <label class="flex flex-col mb-3">
                    <span class="font-semibold my-1" >Nom :  </span>
                    <input type="text" class="bg-jaune rounded-xl border-none w-80">
                </label>
                <label class="flex flex-col mb-3">
                    <span class="font-semibold my-1">Catégorie :  </span>
                    <input type="text" class="bg-jaune rounded-xl border-none" placeholder="Catégorie">
                </label>
                <label class="flex flex-col mb-3">
                    <span class="font-semibold my-1">Biographie :  </span>
                    <input type="email" class="bg-jaune rounded-xl border-none" placeholder="Biographie">
                </label>
                <label class="flex flex-col mb-3">
                    <span class="font-semibold my-1">Jours de disponibilité :</span>
                    <input type="text" class="bg-jaune rounded-xl border-none" placeholder="Les disponibilité">
                </label>
                <div class="flex justify-end mt-8 mb-2 mr-4">
                    <Bouton2 Nom="Sauvegarder"/>
                </div>
            </div>
        </div>
        </section>
    </div>
</template>

<script>
import Bouton2 from "../components/Bouton2View.vue"

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