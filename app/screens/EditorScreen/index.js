import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import {
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Text,
} from 'native-base';

const EditorScreen = ({navigation, route}) => {
  return (
    <SafeAreaView style={styles.root}>
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Header</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Right>
      </Header>
      <View style={styles.animationContainer}>
        <LottieView
          autoPlay
          style={styles.animation}
          source={require('../../assets/animation.json')}
        />
        <View style={{marginTop: 50}}>
          <Button rounded style={styles.button} mode="contained">
            <Text>Start</Text>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {flex: 1},
  animation: {
    width: 300,
    height: 300,
  },
  animationContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default EditorScreen;
