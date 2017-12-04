import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
   const { cardSectionStyle } = styles;

   return (
      <View style={cardSectionStyle}>
         {props.children}
      </View>
   );
};

const styles = {
   cardSectionStyle: {
      backgroundColor: '#F9F9F9',
      borderBottomWidth: 1,
      borderColor: '#ECECEC',
      flexDirection: 'row',
      padding: 5,
      position: 'relative'
   }
};

export default CardSection;
