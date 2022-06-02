<template>
    <div>
        <h1 class="py-8 md:text-4xl md:pt-8 lg:text-5xl">Modifier les artistes</h1>

        <section class="pb-6 mx-2 md:max-w-[70%] md:m-auto lg:max-w-[50%] lg:pb-14">
            <form enctype="multipart/form-data"
                @submit.prevent="updateArtistes">
                <div class="bg-marron dark:bg-Dark-marron p-2 rounded-xl flex gap-2">
                    <div class="mx-auto flex flex-col justify-end mb-10">
                        <div class="m-auto">
                            <img class="" :src="imageData"/>
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
                        <div class="flex justify-between gap-10 my-4">
                            <button type="submit">
                                <Bouton2 class="w-32" Nom="Sauvegarder"/>
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
import Bouton2 from "../../src/components/Bouton2View.vue"

import { 
    getFirestore, 
    collection, 
    doc, 
    getDoc,
    updateDoc, 
    onSnapshot, 
    query,
    orderBy
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'

// Storage
import { 
    getStorage, 
    ref, 
    getDownloadURL, 
    uploadString,
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'

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
            },
            refArtistes:null,
            imgModifiee:false,
            photoActuelle:null,
        }
    },
    name: "CréationView",
    components: { Bouton2 },

    mounted(){
        this.getArtistes(this.$route.params.id);
    },
    methods : {
        async getArtistes(id){
            const firestore = getFirestore();
            const docRef = doc(firestore, "Artistes", id);
            this.refArtistes = await getDoc(docRef);
            if(this.refArtistes.exists()){
                this.Artistes = this.refArtistes.data();
                this.photoActuelle = this.Artistes.photo;
            }else{
                // this.console.log("Artistes inexistant");
            }
            const storage = getStorage();
            const spaceRef = ref(storage, 'Artistes/'+this.Artistes.photo);
            getDownloadURL(spaceRef)
                .then((url) => {
                    this.imageData = url;
            })
            .catch((error) =>{
                // console.log('erreur downloadUrl', error);
            })
        },
        previewImage: function(event) {
            this.file = this.$refs.file.files[0];
            this.Artistes.photo = this.file.name;
            this.imgModifiee = true;
            var input = event.target;
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = (e) => {
                    this.imageData = e.target.result;
                }
                reader.readAsDataURL(input.files[0]);
            }
        },
        async updateArtistes(){
            if(this.imgModifiee){
                const storage = getStorage();
                let docRef = ref(storage, 'Artistes/'+this.photoActuelle);
                deleteObject(docRef);
                docRef = ref(storage, 'Artistes/'+this.Artistes.photo);
                await uploadString(docRef, this.imageData, 'data_url').then((snapshot) => {
                    // console.log('Uploaded a base64 string', this.Artistes.photo);                
                });                   
            }
            const firestore = getFirestore();
            await updateDoc(doc(firestore, "Artistes", this.$route.params.id), this.Artistes);
            this.$router.push('/Artistes');       
        }
    }
}



</script>