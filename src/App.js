import React, {Component} from 'react';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';
import {enableScreens} from 'react-native-screens';

enableScreens();

const firebaseConfig = {
  apiKey: 'AIzaSyADVNUXHlxbpSwBENvmO-mOdYq8oIyv-Lo',
  authDomain: 'manager-dfbc1.firebaseapp.com',
  databaseURL: 'https://manager-dfbc1.firebaseio.com',
  projectId: 'manager-dfbc1',
  storageBucket: 'manager-dfbc1.appspot.com',
  messagingSenderId: '495845232220',
  appId: '1:495845232220:web:e6addb805aeb4b35262099',
  measurementId: 'G-ZC129CNBDB',
};

class App extends Component {
  componentDidMount() {
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
