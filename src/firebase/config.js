import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAAUUxmHB3PirNckf7_z8BW6dJBqbQQQQw",
    authDomain: "neryos-kitchen-site.firebaseapp.com",
    projectId: "neryos-kitchen-site",
    storageBucket: "neryos-kitchen-site.appspot.com",
    messagingSenderId: "850079615740",
    appId: "1:850079615740:web:758bb16c50aa7f7b176579"
  };


  //init firebase

  firebase.initializeApp(firebaseConfig)

  //init services

  const projectFirestore = firebase.firestore()

  export { projectFirestore }