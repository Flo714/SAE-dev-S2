import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDkv-hZuvSSTRzvpzAtkpLA0MoMcwY3hFE",
    authDomain: "sae-202-tradi-val.firebaseapp.com",
    projectId: "sae-202-tradi-val",
    storageBucket: "sae-202-tradi-val.appspot.com",
    messagingSenderId: "646231831557",
    appId: "1:646231831557:web:4f43c781464fb462ad186c"
  };

  // Initialize Firebase
  const appFireBase = initializeApp(firebaseConfig);

const app = createApp(App)
app.use(router)
app.mount('#app')