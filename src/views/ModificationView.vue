<template>
    <div>
        <h1 class="py-8 md:text-4xl md:pt-8 lg:text-5xl">Modifier les artistes</h1>


        <div class="">
        <form enctype="multipart/form-data"
            @submit.prevent="updateArtistes">
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
                        Modifier
                    </button>
                    <button class="" >
                        <RouterLink to="/Artistes" >Cancel</RouterLink>
                    </button>
                </div>

            </div>
        </form>    
        </div>    
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
console.log("id Artistes", this.$route.params.id);
        this.getArtistes(this.$route.params.id);
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
            })
        },
        async getArtistes(id){
            const firestore = getFirestore();
            const docRef = doc(firestore, "Artistes", id);
            this.refArtistes = await getDoc(docRef);
            if(this.refArtistes.exists()){
                this.Artistes = this.refArtistes.data();
                this.photoActuelle = this.Artistes.photo;
            }else{
                this.console.log("Artistes inexistant");
            }
            const storage = getStorage();
            const spaceRef = ref(storage, 'Artistes/'+this.Artistes.photo);
            getDownloadURL(spaceRef)
                .then((url) => {
                    this.imageData = url;
            })
            .catch((error) =>{
                console.log('erreur downloadUrl', error);
            })
        },
    }
}



</script>