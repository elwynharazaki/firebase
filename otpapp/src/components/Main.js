import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';

import Button from './Button';
import Input from './Input';
import Card from './Card';
import CardSection from './CardSection';

class Main extends Component {
   state = { phone: '' };

   buttonPressed() {
      axios.post('https://us-central1-otpphone-be037.cloudfunctions.net/requestOtp',
         { phone: this.state.phone })
         .then(response => {
            return response;
         })
         .catch(err => {
            console.log(err);

            return err;
         });
   }

   render() {
      return (
         <View>
            <Card>
               <CardSection>
                  <Input
                     // text='Phone Number'
                     placeholder='ENTER YOUR PHONE NUMBER'
                     onChangeText={text => this.setState({ phone: text })}
                  />
               </CardSection>

               <CardSection>
                  <Button onPress={this.buttonPressed.bind(this)} title='GET CODE' />
               </CardSection>
            </Card>
         </View>
      );
   }
}

export default Main;
