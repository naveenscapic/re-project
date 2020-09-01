import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import EditorScreen from './app/screens/EditorScreen';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './app/navigation/AppNavigation';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </PaperProvider>
  );
}
