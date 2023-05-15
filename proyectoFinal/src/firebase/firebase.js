
import { initializeApp } from "firebase/app";
import {getFirestore, addDoc, getDoc, getDocs, deleteDoc, updateDoc, collection, doc} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJFJ3W4nG0EHcYp_iYrcu4jkh4LrgMyss",
  authDomain: "finalproy-56e6a.firebaseapp.com",
  projectId: "finalproy-56e6a",
  storageBucket: "finalproy-56e6a.appspot.com",
  messagingSenderId: "413598072964",
  appId: "1:413598072964:web:aab8347dbea617048cc2d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// consultar a base de datos
const bdd = getFirestore()

// crea productos
export const creaProductos = async() => {
    const promise = await fetch('../components/Data.js')
    const productos = await promise.json()
    productos.forEach(async(prod) => {
        await addDoc(collection(bdd, "productos"),{
            id: prod.id,
            img: prod.img,
            title: prod.title,
            price: prod.price,
            details: prod.details,
            count: prod.count,
            isInCart: prod.isInCart
        })
    });
}
