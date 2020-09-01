import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';

const WelcomeScreen = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.root}>
			<Text style={styles.text}>Welcome</Text>
			<Button
				mode="contained"
				onPress={() => navigation.navigate('EditorScreen')}
			>
				Get started
			</Button>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	root: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontSize: 40,
		fontWeight: '600',
		marginBottom: 40,
	},
});

export default WelcomeScreen;
