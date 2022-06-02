<template>
    <h1 class="py-4 md:text-4xl md:pt-12">La Programmation</h1>
    <div class="">
        <form>
          <h6>Vendredi</h6>
          <div class="">
            <div class="">
              <span class="">Nom</span>
            </div>
            <input type="text" class="form-control" v-model="Nom" required />
            <button class="" type="button" @click='createProgramme()' title="Création">
              <Modifier />
            </button>
          </div>
        </form>

        <div class="">
            <table class="">
                <tbody>
                    <tr v-for='Programme in orderByName' :key='Programme.id'>
                        <td>
                          <form>
                            <div class="" >
                              <div class="">
                                <span class="">Nom</span>
                              </div>
                              <input type="text" class="w-80" v-model="Programme.Nom"  required />
                              <button class="" type="button" @click="updateProgramme(Programme)"  title="Modification">
                                <Modifier />
                              </button>
                              <button class="" type="button" @click="deleteProgramme(Programme)" title="Suppression">
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
    <div class="">
        <form>
          <h6>Samedi</h6>
          <div class="">
            <div class="">
              <span class="">Nom</span>
            </div>
            <input type="text" class="form-control" v-model="Nom" required />
            <button class="" type="button" @click='createProgrammeS()' title="Création">
              <Modifier />
            </button>
          </div>
        </form>

        <div class="">
            <table class="">
                <tbody>
                    <tr v-for='ProgrammeS in orderByName' :key='ProgrammeS.id'>
                        <td>
                          <form>
                            <div class="" >
                              <div class="">
                                <span class="">Nom</span>
                              </div>
                              <input type="text" class="w-80" v-model="ProgrammeS.Nom"  required />
                              <button class="" type="button" @click="updateProgrammeS(ProgrammeS)"  title="Modification">
                                <Modifier />
                              </button>
                              <button class="" type="button" @click="deleteProgrammeS(ProgrammeS)" title="Suppression">
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
    <section class="my-8 lg:ml-10">
        <h2 class="my-4 before:bg-jaune before:dark:bg-Dark-marron before:absolute before:w-8 before:h-3 before:rounded md:before:w-10 md:before:h-4"><span class="relative ml-2 md:text-2xl">Vendredi 7 Août 2022</span></h2>
        <ul class="mx-6">
            <li class="responsivetext">18H00 - Ouverture </li>
            <li class="responsivetext">19H00 - Concert d’Annabelle Rogelet </li>
            <li class="responsivetext">21H00 - Concert du groupe : Les Mauvaises Herbes</li>
            <li class="responsivetext">00H00 - Fin du 1er Jour</li>
        </ul>
    </section>
    <section class="my-8 lg:ml-10">
        <h2 class="my-4 before:bg-jaune before:dark:bg-Dark-marron before:absolute before:w-8 before:h-3 before:rounded md:before:w-10 md:before:h-4"><span class="relative ml-2 md:text-2xl">Samedi 8 Août 2022</span></h2>
        <ul class="mx-6">
            <li class="responsivetext">10H00 - Ouverture du festival</li>
            <li class="responsivetext">11H00 - Concert du groupe : Les Oiseaux de Passage</li>
            <li class="responsivetext">13H00 - Pause déjeuner</li>
            <li class="responsivetext">14H00 - Concert du groupe : L'Otite Orphéonique</li>
            <li class="responsivetext">17H00 - Concert de Louise Jallu</li>
            <li class="responsivetext">20H00 - Pause dîner</li>
            <li class="responsivetext">21H00 - Soirée festive</li>
            <li class="responsivetext">00H00 - Fin du 2eme Jour</li>
        </ul>
    </section>
    <section class="mt-8 pb-8 lg:ml-10">
        <h2 class="my-4 before:bg-jaune before:dark:bg-Dark-marron before:absolute before:w-8 before:h-3 before:rounded md:before:w-10 md:before:h-4"><span class="relative ml-2 md:text-2xl">Dimanche 9 Août 2022</span></h2>
        <ul class="mx-6">
            <li class="responsivetext">10H00 - Ouverture du festival</li>
            <li class="responsivetext">11H00 - Concert du Groupe : Crystal Duet</li>
            <li class="responsivetext">13H00 - Pause déjeuner</li>
            <li class="responsivetext">14H00 - Concert de Louise Jallu</li>
            <li class="responsivetext">17H00 - Concert du groupe : L'Otite Orphéonique</li>
            <li class="responsivetext">20H00 - Pause dîner</li>
            <li class="responsivetext">21H00 - Concert d’Annabelle Rogelet </li>
            <li class="responsivetext">00H00 - Fin du Festival</li>
        </ul>
    </section>
</template>

<script>
import Modifier from "../../src/components/icons/ModifierView.vue"
import Delete from "../../src/components/icons/DeleteView.vue"
import Search from "../../src/components/icons/SearchView.vue"

import { 
    getFirestore, 
    collection, 
    doc, 
    addDoc, 
    updateDoc, 
    deleteDoc, 
    onSnapshot } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'

export default {
    data(){ // Données de la vue
          return{                
              Nom:null,
              listeProgrammeSynchro:[],
              listeProgrammeSSynchro:[]
              
          }
        },

        computed:{
          // Ordre Liste Vendredi
            orderByName:function(){
                return this.listeProgrammeSynchro.sort(function(a, b){
                  if(a.Nom < b.Nom)  return -1;
                  if(a.Nom > b.Nom)  return 1;
                  return 0
                });
            },

          // Ordre Liste Samedi
            orderByName2:function(){
                return this.listeProgrammeSSynchro.sort(function(a, b){
                  if(a.Nom < b.Nom)  return -1;
                  if(a.Nom > b.Nom)  return 1;
                  return 0
                });
            },
          },

        mounted(){ // Montage de la vue
            // Appel de la liste des pays synchronisée
            this.getProgrammeSynchro();
            this.getProgrammeSSynchro();
        },



        methods: {
      // Liste pour le programme du vendredi
            async getProgrammeSynchro(){
                // Obtenir Firestore
                const firestore = getFirestore();
                // Base de données (collection)  document pays
                const dbProgramme= collection(firestore, "Programme");
                const query = await onSnapshot(dbProgramme, (snapshot) =>{
                    this.listeProgrammeSynchro = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()})); 
                    console.log('listeProgrammeSynchro', this.listeProgrammeSynchro);
                })
            },

            async createProgramme(){
                // Obtenir Firestore
                const firestore = getFirestore();
                // Base de données (collection)  document pays
                const dbProgramme= collection(firestore, "Programme");
                // On passe en paramètre format json
                // Les champs à mettre à jour
                // Sauf le id qui est créé automatiquement
                const docRef = await addDoc(dbProgramme,{
                    Nom: this.Nom,
                })
                console.log('document créé avec le id : ', docRef.id);
             },
            async updateProgramme(Programme){
                // Obtenir Firestore
                const firestore = getFirestore();
                // Base de données (collection)  document pays
                // Reference du pays à modifier
                const docRef = doc(firestore, "Programme", Programme.id);
                // On passe en paramètre format json
                // Les champs à mettre à jour
                await updateDoc(docRef, {
                    Nom: Programme.Nom
                }) 
             },

            async deleteProgramme(Programme){
                // Obtenir Firestore
                const firestore = getFirestore();
                // Base de données (collection)  document pays
                // Reference du pays à supprimer
                const docRef = doc(firestore, "Programme", Programme.id);
                // Suppression du pays référencé
                await deleteDoc(docRef);
             },




          // Liste pour le programme du Samedi
              async getProgrammeSSynchro(){
                // Obtenir Firestore
                const firestore = getFirestore();
                // Base de données (collection)  document pays
                const dbProgrammeS= collection(firestore, "ProgrammeS");
                const query = await onSnapshot(dbProgrammeS, (snapshot) =>{
                    this.listeProgrammeSSynchro = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()})); 
                    console.log('listeProgrammeSSynchro', this.listeProgrammeSSynchro);
                })
            },
              async createProgrammeS(){
                // Obtenir Firestore
                const firestore = getFirestore();
                // Base de données (collection)  document pays
                const dbProgrammeS= collection(firestore, "ProgrammeS");
                // On passe en paramètre format json
                // Les champs à mettre à jour
                // Sauf le id qui est créé automatiquement
                const docRef = await addDoc(dbProgrammeS,{
                    Nom: this.Nom,
                })
                console.log('document créé avec le id : ', docRef.id);
             },
            async updateProgrammeS(ProgrammeS){
                // Obtenir Firestore
                const firestore = getFirestore();
                // Base de données (collection)  document pays
                // Reference du pays à modifier
                const docRef = doc(firestore, "ProgrammeS", ProgrammeS.id);
                // On passe en paramètre format json
                // Les champs à mettre à jour
                await updateDoc(docRef, {
                    Nom: ProgrammeS.Nom
                }) 
             },

            async deleteProgrammeS(ProgrammeS){
                // Obtenir Firestore
                const firestore = getFirestore();
                // Base de données (collection)  document pays
                // Reference du pays à supprimer
                const docRef = doc(firestore, "ProgrammeS", ProgrammeS.id);
                // Suppression du pays référencé
                await deleteDoc(docRef);
             },
        },
        name: "Programme",
        components: { Modifier, Search, Delete},
};
</script>