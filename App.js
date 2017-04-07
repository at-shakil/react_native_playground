import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image, ScrollView, Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class Screen1 extends Component {
  static navigationOptions = {
    title: "Screen 1"
  };

  render() {
    const { navigate } = this.props.navigation;

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
        <Button title="Boom" onPress={() => {
          console.warn("WARNING TRIGGERED!");
          navigate('Screen2', {data: "Screen 2 - FOREGROUND"});
        }} />
        <Button title="Doom" onPress={() => {
          console.warn("WARNING TRIGGERED!");
          navigate('Screen3', {data: "Screen 3 - FOREGROUND"});
        }} />
      </View>
    );
  }
}

class Screen2 extends Component {
  static navigationOptions = {
    title: ({state}) => state.params.data
  };

  render() {
    const
      { navigate, state } = this.props.navigation,
      { data } = state.params;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Screen 2 - foreground
        </Text>
        <Text style={styles.welcome}>
          {data}
        </Text>
        <Button title="Doom2" onPress={() => {
          console.warn("WARNING TRIGGERED!");
          navigate('Screen1');
        }} />
      </View>
    );
  }
}

class Screen3 extends Component {
  static navigationOptions = {
    title: ({state}) => state.params.data
  };

  render() {
    const
      { navigate, state } = this.props.navigation,
      { data } = state.params;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Screen 3 - foreground
        </Text>
        <Text style={styles.welcome}>
          {data}
        </Text>
        <Button title="Doom2" onPress={() => {
          console.warn("WARNING TRIGGERED!");
          navigate('Screen1');
        }} />
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

const Test2 = StackNavigator({
  Screen1: {screen: Screen1},
  Screen2: {screen: Screen2},
  Screen3: {screen: Screen3}
});

AppRegistry.registerComponent('Test2', () => Test2);
