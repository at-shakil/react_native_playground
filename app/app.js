import React, { Component } from 'react';
import { Text, View, Image, ScrollView, Button, Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';

const S1 = () => <View><Text>S1 text</Text></View>;
const S2 = () => <View><Text>S2 text</Text></View>;
const S3 = () => <View><Text>S3 text</Text></View>;

const S5 = () => <View><Text>S5 text</Text></View>;
const S6 = () => <View><Text>S6 text</Text></View>;

const Nav1 = StackNavigator(
  {
    S5: {screen: S5, path: 's5'},
    S6: {screen: S6, path: 's6'}
  }
);

const Nav2 = StackNavigator(
  {
    S1: {screen: S1},
    S2: {screen: S2, path: 's2'},
    S3: {screen: S3, path: 's3'},
    S4: {screen: Nav1, path: 's4'}
  },
  {
    containerOptions: {
      URIPrefix: Platform.OS == 'android' ? 'http://localhost/' : 'http://'
    }
  }
);

export default Nav2;
