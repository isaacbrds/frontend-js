import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'
import {getFunctions} from 'firebase/functions'

const firebaseConfig = {
    apiKey: "AIzaSyBiFYbp7Y1dW7nukiUXVU-ygIJGxIwLb1g",
    authDomain: "instagram-clone-curso-f7dca.firebaseapp.com",
    projectId: "instagram-clone-curso-f7dca",
    storageBucket: "instagram-clone-curso-f7dca.appspot.com",
    messagingSenderId: "236903079603",
    appId: "1:236903079603:web:6497b1e19d56766ca35ac6",
    measurementId: "G-LHFBHMW0E8"
  };

  const app = initializeApp(firebaseConfig)

  const db = getFirestore(app)
  const auth = getAuth(app)
  const storage = getStorage(app)
  const functions = getFunctions(app)

  export { db, auth, storage, functions };
