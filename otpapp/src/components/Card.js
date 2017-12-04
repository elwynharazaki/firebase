import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
   const { cardStyle } = styles;

   return (
      <View style={cardStyle}>
         {props.children}
      </View>
   );
};

const styles = {
   cardStyle: {
      borderBottomWidth: 0.1,
      borderColor: '#ECECEC',
      borderRadius: 1,
      borderWidth: 1,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 5
   }
};

export default Card;
