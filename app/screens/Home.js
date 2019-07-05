import React, { Component } from 'react';
import { StatusBar, Text } from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import InputWithBtn from '../components/TextInput/InputWithBtn';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'VND';
const TEMP_BASE_PRICE = '10';
const TEMP_QUOTE_PRICE = '230000';
const TEMP_CONVERSION_RATE = 23000;
const TEMP_CONVERSION_DATE = new Date();

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	handlePressBaseCurrency = () => {
		console.log('Press base');
	};

	handlePressQuoteCurrency = () => {
		console.log('Press quote');
	};

	handleTextChange = (text) => {
		console.log('Text change', text);
	};

	handleSwapCurrency = () => {
		console.log('Press swap');
	};

	handleOptionPress = () => {
		console.log('Option press');
	};

	render() {
		return (
			<Container>
				<StatusBar translucent={false} barStyle="light-content" />
				<Header onPress={this.handleOptionPress} />
				<Logo />
				<InputWithBtn
					buttonText={TEMP_BASE_CURRENCY}
					onPress={this.handlePressBaseCurrency}
					defaultValue={TEMP_BASE_PRICE}
					keyboardType="numeric"
					onChangeText={this.handleTextChange}
				/>
				<InputWithBtn
					buttonText={TEMP_QUOTE_CURRENCY}
					onPress={this.handlePressQuoteCurrency}
					editable={false}
					value={TEMP_QUOTE_PRICE}
				/>
				<LastConverted
					base={TEMP_BASE_CURRENCY}
					quote={TEMP_QUOTE_CURRENCY}
					date={TEMP_CONVERSION_DATE}
					conversionRate={TEMP_CONVERSION_RATE}
				/>
				<ClearButton text="Reverse Currencies" onPress={this.handleSwapCurrency} />

				<Text> {'\u00A9'}Toluenn</Text>
			</Container>
		);
	}
}
