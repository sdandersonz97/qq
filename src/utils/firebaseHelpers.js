import firebase from 'firebase'

//Primary refs
export const rootRef = () => firebase.database().ref()
export const usersRef = () => rootRef().child('users')
export const quizesRef = () => rootRef().child('quizez')
export const questionsRef = () => rootRef().child('questions')
export const tagsRef = () => rootRef().child('tags')

