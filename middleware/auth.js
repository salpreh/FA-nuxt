import { firebase } from '@/plugins/firebase'

// NOTE: A middleware exports a function that recieves the context of the aplication.
export default function({ redirect }) {
  firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
      redirect('/login')
    } else {
      console.log(user)
    }
  })
}
