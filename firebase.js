 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-analytics.js";
 import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js"
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyBygGaD5e_YyQccHI4TT5un2Sadd8UbjCA",
   authDomain: "fire-base-e4be5.firebaseapp.com",
   databaseURL: "https://fire-base-e4be5-default-rtdb.firebaseio.com",
   projectId: "fire-base-e4be5",
   storageBucket: "fire-base-e4be5.appspot.com",
   messagingSenderId: "630920636530",
   appId: "1:630920636530:web:624188d6656569435a3aeb",
   measurementId: "G-DTBRFMG7KV"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);

 const db = getFirestore()

 export const saveProduct = (name, imgUrl, imgMap, facebook, price, description, disponible, phone) =>
 addDoc(collection(db, "products"), { name, imgUrl, imgMap, facebook, price, description, disponible, phone });
