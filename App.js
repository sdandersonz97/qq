import React from 'react'
import { Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './src/reducers'
export default class App extends React.Component {
  render() {
    const store = createStore(rootReducer, applyMiddleware(thunk))
    return (
      <Provider store={store}>
        <View>
          <Text>Quizlo!</Text>
        </View>
      </Provider>
    )
  }
}

