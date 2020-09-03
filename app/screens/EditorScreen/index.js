import React from 'react';
import {SafeAreaView, View, StyleSheet, ScrollView} from 'react-native';
import {Header, Button} from 'react-native-elements';
import LottieView from 'lottie-react-native';

const EditorScreen = ({navigation, route}) => {
  return (
    <SafeAreaView style={styles.root}>
      <Header
        leftComponent={{icon: 'menu', color: '#fff'}}
        centerComponent={{text: 'MY TITLE', style: {color: '#fff'}}}
        rightComponent={{icon: 'home', color: '#fff'}}
        placement="center"
      />
      <ScrollView>
        <View style={styles.animationContainer}>
          <LottieView
            autoPlay
            style={styles.animation1}
            source={require('../../assets/animation.json')}
            autoSize={false}
          />
          <LottieView
            autoPlay
            style={styles.animation2}
            source={require('../../assets/done.json')}
            autoSize
            resizeMode="cover"
          />
          <View style={{marginTop: 50}}>
            <Button
              mode="contained"
              title="Go Back"
              onPress={() => navigation.goBack()}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {flex: 1},
  animation1: {
    width: 300,
    height: 300,
  },
  animation2: {
    width: 200,
    height: 200,
  },
  animationContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default EditorScreen;
