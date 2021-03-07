// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";


// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
    apiKey: "AIzaSyAF_uciMnr79io_sLdLxx2o1Zo7d7gdgCo",
    authDomain: "udemy-react-crwn.firebaseapp.com",
    projectId: "udemy-react-crwn",
    storageBucket: "udemy-react-crwn.appspot.com",
    messagingSenderId: "672134040559",
    appId: "1:672134040559:web:8674ccb441c1bfe834041a"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  
  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(err){
      console.log('error ocurrs creating the user',err.message);
    }
  }
  return userRef;
}


var provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
    'prompt': 'select_account'
  });

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
}

export default firebase;