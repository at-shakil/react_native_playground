import React, { Component } from 'react';
import { Text, View, Image, ScrollView, Button, Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider, connect } from 'react-redux';

const S1 = () => <View><Text>S1 text</Text></View>;
const S2 = () => <View><Text>S2 text</Text></View>;
const S3 = () => <View><Text>S3 text</Text></View>;

const AppNav = StackNavigator(
  {
    S1: {screen: S1},
    S2: {screen: S2, path: 's2'},
    S3: {screen: S3, path: 's3'}
  }
);

const CoreNav = StackNavigator(
  {
    App: {screen: AppNav}
  },
  {
    containerOptions: {
      URIPrefix: Platform.OS == 'android' ? 'http://localhost/' : 'http://'
    }
  }
);

export default CoreNav;
