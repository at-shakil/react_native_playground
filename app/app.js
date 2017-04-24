import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { Text, View, Image, ScrollView, Button, Platform, Linking } from 'react-native';
import { StackNavigator, StackRouter, addNavigationHelpers } from 'react-navigation';
import { Provider, connect } from 'react-redux';

const S1 = () => <View><Text>S1 text</Text></View>;
const S2 = () => <View><Text>S2 text</Text></View>;
const S3 = () => <View><Text>S3 text</Text></View>;

class AppNav extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleUrl = this.handleUrl.bind(this);
  }

  static router = StackRouter(
    {
      S1: {screen: S1, path: 's1'},
      S2: {screen: S2, path: 's2'},
      S3: {screen: S3, path: 's3'}
    },
    {

    }
  );

  handleUrl(url) {
    console.warn(url);
    const
      { navigation } = this.props,
      { state, dispatch } = navigation,
      uriPrefix = "http://localhost",
      params = {},
      Component = AppNav.router.getComponentForState(state);
    let
      path = url.split(uriPrefix)[1];
    if(!path) {
      path = url;
    }

    console.warn("Path: "+path+", Params: "+JSON.stringify(params));

    const action = AppNav.router.getActionForPathAndParams(path, params);

    if(action) {
      dispatch(action);
    }
  }

  componentDidMount() {
    Linking.addEventListener('url', ({ url }: {url: string}) => {
      this.handleUrl(url);
    });

    Linking.getInitialURL().then(
      (url: string) => url && this.handleUrl(url)
    );
  }

  render() {
    const
      { navigation } = this.props,
      { state, dispatch } = navigation,
      { routes, index } = state,
      Component = AppNav.router.getComponentForState(state);
    let
      childNavigation = { dispatch, state: routes[index] };
    childNavigation = addNavigationHelpers(childNavigation);

    return (
      <Component navigation={childNavigation} />
    );
  }
}

@connect(state => ({nav: state.nav}))
class App extends Component {
  render() {
    const
      { dispatch, nav } = this.props,
      uriPrefix = Platform.OS == 'android' ? 'http://localhost/' : 'http://';

    return (
      <AppNav
        navigation={addNavigationHelpers({dispatch: this.props.dispatch, state: this.props.nav})}
      />
    );
  }
}

const navReducer = (state, action) => (AppNav.router.getStateForAction(action, state) || state);
const rootReducer = combineReducers({nav: navReducer});

const RootApp = props =>
  <Provider store={createStore(rootReducer)}>
    <App />
  </Provider>;

export default RootApp;
