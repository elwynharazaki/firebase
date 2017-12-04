import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import Header from './src/components/Header';
import Main from './src/components/Main';

class App extends Component {
   componentWillMount() {
      const config = {
         apiKey: 'AIzaSyCksY-ck0cjyf9jtX3KW3C4egUbetWlDUw',
         authDomain: 'otpphone-be037.firebaseapp.com',
         databaseURL: 'https://otpphone-be037.firebaseio.com',
         projectId: 'otpphone-be037',
         storageBucket: 'otpphone-be037.appspot.com',
         messagingSenderId: '303648080144'
       };
       firebase.initializeApp(config);
   }

   render() {
      return (
         <View>
            <Header />
               <Main />
         </View>
      );
   }
}

export default App;
