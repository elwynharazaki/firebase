import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
	const { buttonStyle, textStyle } = styles;

	return (
		<TouchableOpacity style={{ ...buttonStyle, backgroundColor: props.color || '#444444' }}
			onPress={props.onPress}>
				<Text style={textStyle}>{props.title}</Text>
      </TouchableOpacity>
   );
};

const styles = {
	textStyle: {
		alignSelf: 'center',
      color: '#F9F9F9',
      fontSize: 16,
      fontWeight: '600',
      paddingBottom: 10,
		paddingTop: 10
   },

	buttonStyle: {
		alignItems: 'center',
		alignSelf: 'stretch',
		backgroundColor: '#F4F4F4',
		borderRadius: 4,
		flex: 1,
		padding: 2
   }
};

export default Button;
