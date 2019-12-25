import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'
import firebaseConfig from '@/plugins/firebase.config'

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

const db = firebase.firestore()

export { db, firebase }
