import firebase from "firebase/compat/app";
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAYix1DHEkLD1zK3IOSd2ibI0vOKBeTom4",
  authDomain: "shopping-cart-90ad5.firebaseapp.com",
  projectId: "shopping-cart-90ad5",
  storageBucket: "shopping-cart-90ad5.appspot.com",
  messagingSenderId: "113558861963",
  appId: "1:113558861963:web:f6eb88866cb7af2ba37c8e"
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;