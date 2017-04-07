/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image, ScrollView, Button
} from 'react-native';

export default class Test2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Text22222221
        </Text>
        <Text style={styles.instructions}>
          Text 2 1
        </Text>
        <Text style={styles.instructions}>
          Text 3 1
        </Text>
        <Image source={require('./img/favicon.png')} />
        <Image source={{uri: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'}} style={{width: 240, height: 80}} />
        <Button title="Doom" onPress={() => {console.warn("WARNING TRIGGERED!");}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'red'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Test2', () => Test2);
