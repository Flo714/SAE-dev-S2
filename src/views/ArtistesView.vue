<template>
    <h1 class="py-8 md:text-4xl md:pt-12 lg:text-5xl">Les artistes</h1>

    <div class="">
        <div class="">
            <h5>Liste des Artistes</h5>
        </div>    
        <hr/>
        <form>
          <h6>Nouveau pays</h6>
          <div class="">
            <div class="">
              <span class="">Nom</span>
            </div>
            <input type="text" class="" v-model="Nom" required />
            <button class="" type="button" @click='createArtistes()' title="Création">
              <Modifier />
            </button>
          </div>
        </form>

        <div class="">
            <table class="">
                <thead>
                    <tr>                      
                        <th scope="col">
                          <div class="">Liste des Pays actuels</div>                          
                          <span class="">
                            <div class="ml-80" >
                                <div class="">
                                  <span class="" >Filtrage</span>
                                </div>
                                <input type="text" class="" />
                                <button class="" type="submit" title="Création">
                                  <Search />
                                </button>
                              </div>
                          </span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for='Artistes in orderByName' :key='Artistes.id'>
                        <td>
                          <form>
                            <div class="">
                              <div class="">
                                <span class="">Nom</span>
                              </div>
                              <input type="text" class="" v-model="Artistes.Nom" required />
                              <button class="" type="button" @click.prevent="updateArtistes(Artistes)" title="Modification">
                                <Modifier />
                              </button>
                              <button class="" type="button" @click.prevent="deleteArtistes(Artistes)" title="Suppression">
                                <Delete />
                              </button>
                            </div>
                          </form>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(350px,2fr))] gap-8 py-10">
        <div>
            <Card
                Nom="Annabelle Rogelet"
                Role="Violoncelliste"
                Bio="Joue dans plusieurs groupes"
                Jour="Samedi et Dimanche"
                Image="/img-squirrel/Annabelle_Rogelet.webp"/>
        </div>
        <div>
            <Card
                Nom="Les Mauvaises Herbes"
                Role="Jazz, Chanson classique"
                Bio="S’adapte à tout style de musique"
                Jour="Vendredi"
                Image="/img-squirrel/Les-Mauvaises-Herbes.webp"/>
        </div>
        <div>
            <Card
                Nom="Louise Jallu"
                Role="Bandonéoniste"
                Bio="Nominé aux Victoires du Jazz"
                Jour="Samedi et Dimanche"
                Image="/img-squirrel/Louise_Jallu.webp"/>
        </div>
        <div>
            <Card
                Nom="Les Oiseaux de Passage"
                Role="Pop, Jazz ..."
                Bio="Reprises de chansons de Georges Brassens"
                Jour="Samedi"
                Image="/img-squirrel/Les_oiseaux_de_Passage.webp"/>
        </div>
        <div>
            <Card
                Nom="L’Otite Orphéonique"
                Role="Jazz"
                Bio="Orchestre forains"
                Jour="Samedi et Dimanche"
                Image="/img-squirrel/L_otite-Orphéonique-_1_.webp"/>
        </div>
        <div>
            <Card
                Nom="Crystal Duet"
                Role="Contre-ténor"
                Bio="Groupe qui fait traverser le temps"
                Jour="Dimanche"
                Image="/img-squirrel/Crystal-Duet.webp"/>
        </div>
    </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core';

import Card from "../../src/components/CardView.vue"
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
    onSnapshot } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'


export default {
    data(){ // Données de la vue
            return{                
                nom:null, // Pour la création d'un nouveau pays
                listeArtistesSynchro:[] // Liste des pays synchronisée - collection pays de Firebase
            }
        },
        computed:{
            orderByName:function(){
                return this.listeArtistesSynchro.sort(function(a, b){
                  if(a.Nom < b.Nom)  return -1;
                  if(a.Nom > b.Nom)  return 1;
                  return 0
                })
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
                    Nom: this.Nom
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
  components: { Card, Search, Modifier, Delete },
};
</script>