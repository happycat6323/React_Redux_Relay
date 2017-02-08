import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCV74orjm4hYyEBQUC8Xfm4GEw5OufTG44",
    authDomain: "mypet-c6c89.firebaseapp.com",
    databaseURL: "https://mypet-c6c89.firebaseio.com",
    storageBucket: "mypet-c6c89.appspot.com",
    messagingSenderId: "14624415537"
}

firebase.initializeApp(config)
//const database = firebase.database()

export default firebase