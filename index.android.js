import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import App from "./Components/App.js";


export default class reactLoginApp extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('reactLoginApp', () => reactLoginApp);
