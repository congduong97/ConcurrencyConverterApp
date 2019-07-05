import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
	container: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0
	},
	button: {
		alignSelf: 'flex-end',
		paddingHorizontal: 20,
		paddingVertical: 5
	},
	icon: {
		width: 18
	}
});

export default styles;
