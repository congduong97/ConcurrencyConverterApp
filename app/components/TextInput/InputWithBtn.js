import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import color from 'color';

import styles from './styles';

const InputWithBtn = (props) => {
	const { onPress, buttonText, editable = true } = props;

	const underlayColor = color(styles.$buttonBackgroundColorBase).darken(styles.$buttonBackgroundColorModifier);

	const containerStyles = [ styles.container ];

	if (editable == false) {
		containerStyles.push(styles.containerDisable);
	}

	return (
		<View style={containerStyles}>
			<TouchableHighlight onPress={onPress} style={styles.buttonContainer} underlayColor={underlayColor}>
				<Text style={styles.buttonText}>{buttonText}</Text>
			</TouchableHighlight>
			<View style={styles.border} />
			<TextInput style={styles.input} {...props} underlineColorAndroid="transparent" />
		</View>
	);
};

InputWithBtn.propTypes = {
	onPress: PropTypes.func,
	buttonText: PropTypes.string,
	editable: PropTypes.bool
};

export default InputWithBtn;
