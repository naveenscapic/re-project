import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import EditorScreen from '../screens/EditorScreen';

const Stack = createStackNavigator();

const AppNavigation = () => (
	<Stack.Navigator>
		<Stack.Screen
			name="WelcomeScreen"
			component={WelcomeScreen}
			options={{ headerShown: false }}
		/>
		<Stack.Screen
			name="EditorScreen"
			component={EditorScreen}
			options={{ headerShown: false }}
		/>
	</Stack.Navigator>
);

export default AppNavigation;
