import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { Text, View, Image, ScrollView, Button, Platform } from 'react-native';
import { StackNavigator, StackRouter, addNavigationHelpers } from 'react-navigation';
import { Provider, connect } from 'react-redux';

const S1 = () => <View><Text>S1 text</Text></View>;
const S2 = () => <View><Text>S2 text</Text></View>;
const S3 = () => <View><Text>S3 text</Text></View>;

const AppNav = StackNavigator(
  {
    S1: {screen: S1, path: 's1'},
    S2: {screen: S2, path: 's2'},
    S3: {screen: S3, path: 's3'}
  }
);

@connect(state => ({nav: state.nav}))
class App extends Component {
  render() {
    return (
      <AppNav navigation={addNavigationHelpers({dispatch: this.props.dispatch, state: this.props.nav})} />
    );
  }
}

const navReducer = (state, action) => (AppNav.router.getStateForAction(action, state) || state);
const rootReducer = combineReducers({nav: navReducer});

const CoreApp = props =>
  <Provider store={createStore(rootReducer)}>
    <App />
  </Provider>

const CoreNav = StackNavigator(
  {
    CoreApp: {screen: CoreApp, path: 'core'}
  },
  {
    containerOptions: {
      URIPrefix: Platform.OS == 'android' ? 'http://localhost/' : 'http://'
    }
  }
);

export default CoreNav;
