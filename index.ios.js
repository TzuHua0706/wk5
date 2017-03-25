import React from 'react';
import {AppRegistry,View} from 'react-native';
// import Page from './page1';
// import Page from './page2';
 import Page from './page3';

const wk1 = () => {
  return(
    <View>
      <Page />
    </View>
  );
};

AppRegistry.registerComponent('wk1', () => wk1);