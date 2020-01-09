import React from 'react';
import AppNavigator from './router';
console.disableYellowBox = true;
export default class App extends React.Component {
  
  render() {
    return (
      
      <AppNavigator/>
    );
  }
}