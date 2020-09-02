/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { Appbar, Button } from 'react-native-paper';
import LottieView from 'lottie-react-native';

const EditorScreen = ({ navigation, route }) => {

  return (
    <SafeAreaView style={styles.root}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={route.name} subtitle="Subtitle" />
      </Appbar.Header>
      <View style={styles.animationContainer}>
        <LottieView
          autoPlay
          style={styles.animation}
          source={require('../../assets/animation.json')}
        />
        <View style={{ marginTop: 50 }}>
          <Button mode="contained">Start</Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1 },
  animation: {
    width: 300,
    height: 300,
  },
  animationContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default EditorScreen;
