<template>
    <h1 class="py-4 md:text-4xl md:pt-12">La Programmation</h1>
    <div>
      <h2 class="my-8 before:bg-jaune before:dark:bg-Dark-marron before:absolute before:w-8 before:h-3 before:rounded md:before:w-10 md:before:h-4"><span class="relative ml-2 md:text-2xl">Vendredi 7 Août 2022</span></h2>
       <div  class="flex justify-between">
        <div class="">
              <table class="ml-10">>
                  <tbody>
                      <tr v-for='Programme in orderByName' :key='Programme.id'>
                          <td class="">
                            <form>
                              <div class="flex gap-4" >
                                <input type="text" class="bg-fond border-marron dark:border-Dark-marron rounded-lg my-2 p-1 w-[30rem]" v-model="Programme.Nom"  required />
                                <div class="mt-2 flex gap-4">
                                  <button class="bg-jaune dark:bg-Dark-marron rounded-lg mb-2 px-1 hover:bg-hover dark:hover:text-Dark-marron duration-300" type="button" @click="updateProgramme(Programme)"  title="Modification">
                                    <Modifier />
                                  </button>
                                  <button class="bg-jaune dark:bg-Dark-marron rounded-lg mb-2 px-1 hover:bg-hover dark:hover:text-Dark-marron duration-300" type="button" @click="deleteProgramme(Programme)" title="Suppression">
                                    <Delete />
                                  </button>
                                </div>
                              </div>
                            </form>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
        <form>
            <div class="flex justify-end mr-40">
              <div class="bg-marron dark:bg-Dark-marron p-2 rounded-md">
                <h3 class="mb-4">Mettre une nouvelle Heure</h3>
                <div class="flex gap-4">
                  <input type="text" class="bg-jaune dark:bg-marron border-none rounded-xl" v-model="Nom" required />
                  <button class="bg-jaune dark:bg-marron rounded-lg my-1 p-1 hover:bg-hover  dark:hover:text-Dark-marron duration-300" type="button" @click='createProgramme()' title="Création">
                    <Modifier />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
    </div>
    <div class="my-4">
        <h2 class="my-4 before:bg-jaune before:dark:bg-Dark-marron before:absolute before:w-8 before:h-3 before:rounded md:before:w-10 md:before:h-4"><span class="relative ml-2 md:text-2xl">Samedi 8 Août 2022</span></h2>
        <div class="flex justify-between">
          <div class="">
              <table class="ml-10">
                  <tbody>
                      <tr v-for='ProgrammeS in orderByName2' :key='ProgrammeS.id'>
                          <td>
                            <form>
                              <div class="flex gap-4" >
                                <input type="text" class="bg-fond border-marron dark:border-Dark-marron rounded-lg my-2 p-1 w-[30rem]" v-model="ProgrammeS.NomS"  required />
                                <div class="mt-2 flex gap-4">
                                  <button class="bg-jaune dark:bg-Dark-marron rounded-lg mb-2 px-1 hover:bg-hover dark:hover:text-Dark-marron duration-300" type="button" @click="updateProgrammeS(ProgrammeS)"  title="Modification">
                                    <Modifier />
                                  </button>
                                  <button class="bg-jaune dark:bg-Dark-marron rounded-lg mb-2 px-1 hover:bg-hover dark:hover:text-Dark-marron duration-300" type="button" @click="deleteProgrammeS(ProgrammeS)" title="Suppression">
                                    <Delete />
                                  </button>
                                </div>
                              </div>
                            </form>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
          <form>
            <div class="flex justify-end mr-40">
              <div class="bg-marron dark:bg-Dark-marron p-2 rounded-md">
                <h3 class="mb-4">Mettre une nouvelle Heure</h3>
                <div class="flex gap-4">
                  <input type="text" class="bg-jaune dark:bg-marron border-none rounded-xl" v-model="NomS" required />
                  <button class="bg-jaune dark:bg-marron rounded-lg my-1 p-1 hover:bg-hover dark:hover:text-Dark-marron duration-300" type="button" @click='createProgrammeS()' title="Création">
                    <Modifier />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
    </div>
    <div class="pb-10">
        <h2 class="my-4 before:bg-jaune before:dark:bg-Dark-marron before:absolute before:w-8 before:h-3 before:rounded md:before:w-10 md:before:h-4"><span class="relative ml-2 md:text-2xl">Dimanche 9 Août 2022</span></h2>
        <div class="flex justify-between">
            <table class="ml-10">>
                <tbody>
                    <tr v-for='ProgrammeD in orderByName3' :key='ProgrammeD.id'>
                        <td>
                          <div class="flex gap-4" >
                            <input type="text" class="bg-fond border-marron dark:border-Dark-marron rounded-lg my-2 p-1 w-[30rem]" v-model="ProgrammeD.NomD"  required />
                            <div class="mt-2 flex gap-4">
                              <button class="bg-jaune dark:bg-Dark-marron rounded-lg mb-2 px-1 hover:bg-hover dark:hover:text-Dark-marron duration-300" type="button" @click="updateProgrammeD(ProgrammeD)"  title="Modification">
                                <Modifier />
                              </button>
                              <button class="bg-jaune dark:bg-Dark-marron rounded-lg mb-2 px-1 hover:bg-hover dark:hover:text-Dark-marron duration-300" type="button" @click="deleteProgrammeD(ProgrammeD)" title="Suppression">
                                <Delete />
                              </button>
                            </div>
                          </div>
                        </td>
                    </tr>
                </tbody>
            </table>
          <form>
            <div class="flex justify-end mr-40">
              <div class="bg-marron dark:bg-Dark-marron p-2 rounded-md">
                <h3 class="mb-4">Mettre une nouvelle Heure</h3>
                <div class="flex gap-4">
                  <input type="text" class="bg-jaune  dark:bg-marron border-none rounded-xl" v-model="NomD" required />
                  <button class="bg-jaune dark:bg-marron rounded-lg my-1 p-1 hover:bg-hover dark:hover:text-Dark-marron duration-300" type="button" @click='createProgrammeD()' title="Création">
                    <Modifier />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
    </div>
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
              listeProgrammeSSynchro:[],
              listeProgrammeDSynchro:[],
              
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
                  if(a.NomS < b.NomS)  return -1;
                  if(a.NomS > b.NomS)  return 1;
                  return 0
                });
            },

          // Ordre Liste Dimanche
            orderByName3:function(){
                return this.listeProgrammeDSynchro.sort(function(a, b){
                  if(a.NomD < b.NomD)  return -1;
                  if(a.NomD > b.NomD)  return 1;
                  return 0
                });
            },
          },

        mounted(){ // Montage de la vue
            // Appel des liste des Programmes synchronisée
            this.getProgrammeSynchro();
            this.getProgrammeSSynchro();
            this.getProgrammeDSynchro();
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
                    NomS: this.NomS,
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
                    NomS: ProgrammeS.NomS
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


            // Liste pour le programme du Dimanche

            async getProgrammeDSynchro(){
                // Obtenir Firestore
                const firestore = getFirestore();
                // Base de données (collection)  document pays
                const dbProgrammeD= collection(firestore, "ProgrammeD");
                const query = await onSnapshot(dbProgrammeD, (snapshot) =>{
                    this.listeProgrammeDSynchro = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()})); 
                    console.log('listeProgrammeDSynchro', this.listeProgrammeDSynchro);
                })
             },
            async createProgrammeD(){
                // Obtenir Firestore
                const firestore = getFirestore();
                // Base de données (collection)  document pays
                const dbProgrammeD= collection(firestore, "ProgrammeD");
                // On passe en paramètre format json
                // Les champs à mettre à jour
                // Sauf le id qui est créé automatiquement
                const docRef = await addDoc(dbProgrammeD,{
                    NomD: this.NomD,
                })
                console.log('document créé avec le id : ', docRef.id);
             },
            async updateProgrammeD(ProgrammeD){
                // Obtenir Firestore
                const firestore = getFirestore();
                // Base de données (collection)  document pays
                // Reference du pays à modifier
                const docRef = doc(firestore, "ProgrammeD", ProgrammeD.id);
                // On passe en paramètre format json
                // Les champs à mettre à jour
                await updateDoc(docRef, {
                    NomD: ProgrammeD.NomD
                }) 
             },
            async deleteProgrammeD(ProgrammeD){
                // Obtenir Firestore
                const firestore = getFirestore();
                // Base de données (collection)  document pays
                // Reference du pays à supprimer
                const docRef = doc(firestore, "ProgrammeD", ProgrammeD.id);
                // Suppression du pays référencé
                await deleteDoc(docRef);
             },
        },
        name: "Programme",
        components: { Modifier, Search, Delete},
};
</script>