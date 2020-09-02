import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Button, Text} from 'native-base';

const WelcomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.text}>Welcome</Text>
      <Button
        style={styles.button}
        rounded
        mode="contained"
        onPress={() => navigation.navigate('EditorScreen')}>
        <Text>Get started</Text>
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
  button: {
    width: 200,
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default WelcomeScreen;
