<template>
    <h1 class="py-8 md:text-4xl md:pt-12 lg:text-5xl">Les artistes</h1>

    <div class="">   
        <form>
          <div class="">
            <div class="">
              <h2 class="">Créer un artiste</h2>
            </div>
            <RouterLink to="/Creation">
              <div class="flex justify-center mr-40 my-8">
                <Bouton @click='createArtistes()' title="Création"
                Nom="Créer"/>
              </div>
            </RouterLink>
          </div>
        </form>

        <div class="flex justify-end">
            <table class="">
                <thead>
                    <tr>                      
                        <th scope="col">                        
                          <span class="">
                            <div class="flex gap-6 lg:mr-20 bg-marron dark:bg-Dark-marron rounded-lg p-2" >
                                <div class="mt-1 ml-2">
                                  <span class=" text-lg lg:text-xl" >Filtre</span>
                                </div>
                                <input type="text" class="bg-jaune dark:bg-marron border-marron+ rounded-lg w-40 sm:w-full" v-model='filter'/>
                            </div>
                          </span>
                        </th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
    <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(350px,2fr))] gap-8 py-10">
        <div v-for="artiste in filterByName" :key="artiste.id">
            <Card
                :Nom="artiste.Nom"
                :Role="artiste.Role"
                :Bio="artiste.Bio"
                :Jour="artiste.Jour"
                :photo="artiste.photo" 
                :id="artiste.id"
                />
        </div>

    </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core';

import Card from "../../src/components/CardView.vue"
import Bouton from "../../src/components/BoutonView.vue"
import Search from "../../src/components/icons/SearchView.vue"
import Modifier from "../../src/components/icons/ModifierView.vue"
import Delete from "../../src/components/icons/DeleteView.vue"

// Bibliothèque Firestore : import des fonctions
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


export default {
    data(){ // Données de la vue
          return{                
              nom:null, // Pour la création d'un nouveau pays
              listeArtistesSynchro:[], // Liste des pays synchronisée - collection pays de Firebase
              filter:'',
              listeArtistes:[],
          }
        },
        computed:{
            orderByName:function(){
                return this.listeArtistesSynchro.sort(function(a, b){
                  if(a.Nom < b.Nom)  return -1;
                  if(a.Nom > b.Nom)  return 1;
                  return 0
                })
            },
            filterByName:function(){
                if(this.filter.length > 0){
                    let filter = this.filter.toLowerCase();
                    return this.orderByName.filter(function(Artistes){
                        return Artistes.Nom.toLowerCase().includes(filter);
                    })
                }else{
                    return this.orderByName;
                }
            }
        },
        mounted(){ // Montage de la vue
            // Appel de la liste des pays synchronisée
            this.getArtistesSynchro();
        },

        methods: {
            async getArtistesSynchro(){
                // Obtenir Firestore
                const firestore = getFirestore();
                // Base de données (collection)  document pays
                const dbArtistes= collection(firestore, "Artistes");
                // Liste des pays synchronisée
                const query = await onSnapshot(dbArtistes, (snapshot) =>{
                    //  Récupération des résultats dans listePaysSynchro
                    // On utilse map pour récupérer l'intégralité des données renvoyées
                    // on identifie clairement le id du document
                    // les rest parameters permet de préciser la récupération de toute la partie data
                    this.listeArtistesSynchro = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}));
                    this.listeArtistesSynchro.forEach(function(Artistes){
                      const storage = getStorage();
                      const spaceRef = ref(storage, 'Artistes/'+Artistes.photo);
                      getDownloadURL(spaceRef)
                      .then((url) => {
                        Artistes.photo = url;
                      })
                      .catch((error) =>{
                        console.log('erreur downloadUrl', error)
                      })
                    }) 
                })
            },

            async createArtistes(){
                // Obtenir Firestore
                const firestore = getFirestore();
                // Base de données (collection)  document pays
                const dbArtistes= collection(firestore, "Artistes");
                // On passe en paramètre format json
                // Les champs à mettre à jour
                // Sauf le id qui est créé automatiquement
                const docRef = await addDoc(dbArtistes,{
                    Nom: this.Nom,
                })
                console.log('document créé avec le id : ', docRef.id);
             },
            async updateArtistes(Artistes){
                // Obtenir Firestore
                const firestore = getFirestore();
                // Base de données (collection)  document pays
                // Reference du pays à modifier
                const docRef = doc(firestore, "Artistes", Artistes.id);
                // On passe en paramètre format json
                // Les champs à mettre à jour
                await updateDoc(docRef, {
                    Nom: Artistes.Nom
                }) 
             },

            async deleteArtistes(Artistes){
                // Obtenir Firestore
                const firestore = getFirestore();
                // Base de données (collection)  document pays
                // Reference du pays à supprimer
                const docRef = doc(firestore, "Artistes", Artistes.id);
                // Suppression du pays référencé
                await deleteDoc(docRef);
             },

        },
        
  name: "App",
  components: { Card, Search, Modifier, Delete, Bouton },
};
</script>