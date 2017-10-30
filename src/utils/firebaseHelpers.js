import firebase from 'firebase'

//Firebase configuration
const config = {
    apiKey: "AIzaSyCwnY8vgg-n3rTBs-Xm3euBvdj2wKeUCX4",
    authDomain: "quizlo-81d1c.firebaseapp.com",
    databaseURL: "https://quizlo-81d1c.firebaseio.com",
    projectId: "quizlo-81d1c",
    storageBucket: "quizlo-81d1c.appspot.com",
    messagingSenderId: "169851619173"
  };

export const initFire = () => firebase.initializeApp(config);


//Primary refs
export const rootRef = () => firebase.database().ref()
export const usersRef = () => rootRef().child('users')
export const quizesRef = () => rootRef().child('quizez')
export const questionsRef = () => rootRef().child('questions')
export const tagsRef = () => rootRef().child('tags')

//Secondary refs
export const userRef = uid => usersRef().child(uid)
export const quizRef = quizId => quizesRef().child(quizId)
export const questionRef = questionId => questionsRef().child(questionId)
export const tagRef = tagId => tagsRef().child(tagId)
