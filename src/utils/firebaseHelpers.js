import firebase from 'firebase'



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
