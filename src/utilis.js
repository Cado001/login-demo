import { initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAIKCk2eZYBWhxVBtYD4pv-HD89Z0zfarc",
    authDomain: "fir-auth-mp.firebaseapp.com",
    projectId: "fir-auth-mp",
    storageBucket: "fir-auth-mp.appspot.com",
    messagingSenderId: "362835611794",
    appId: "1:362835611794:web:0824a53397dab58dfc564b",
    measurementId: "G-MXNXK9L949"
  };

  const app = initializeApp(firebaseConfig)

  export const auth = getAuth(app)
  