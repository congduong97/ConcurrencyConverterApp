import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, Keyboard } from 'react-native';
import styles from './styles';

export default class Logo extends Component {
	componentDidMount = () => {
		console.log('render logo');

		this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardShow);
		this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardHide);
	};
	componentWillUnmount() {
		console.log('unmont');
		this.keyboardDidShowListener.remove();
		this.keyboardDidHideListener.remove();
	}

	keyboardShow = () => {
		console.log('keyboard show');
	};

	keyboardHide = () => {
		console.log('key board hide');
	};

	render() {
		return (
			<View style={styles.container}>
				<ImageBackground
					resizeMode="contain"
					source={require('./images/background.png')}
					style={styles.containerImage}
				>
					<Image resizeMode="contain" source={require('./images/logo.png')} style={styles.image} />
				</ImageBackground>
				<Text style={styles.text}>Currency Converter</Text>
			</View>
		);
	}
}
