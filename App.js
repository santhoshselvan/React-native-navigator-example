
import React, { Component } from 'react';
import {
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';

import { getHomeViewStack } from './src/utils/navigator/HomeStack'
import { getDiscoverViewStack } from './src/utils/navigator/DiscoverStack'
import { getMoreViewStack } from './src/utils/navigator/MoreStack'
import { getBottomTabbar } from './src/utils/navigator/BottomTabNavigator'
import { getDrawerNavigator } from './src/utils/navigator/DrawerNavigator'
import * as codePush from "react-native-code-push";

//创建抽屉视图
const DrawerNavigator = getDrawerNavigator()

//为每个导航栏创建堆栈视图
const HomeViewStack = getHomeViewStack()
const DiscoverViewStack = getDiscoverViewStack()
const MoreViewStack = getMoreViewStack()



//创建底部导航栏
const BottomTabNavigator = getBottomTabbar(HomeViewStack, DiscoverViewStack, DrawerNavigator)


//创建switchNavigator
const switchNavigator = createSwitchNavigator(
  {
    // Auth: Auth,
    App: BottomTabNavigator,
    // Login: Login,
  },
  {
    initialRouteName: 'App',
  }
)

let codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.ON_NEXT_RESUME
}

//创建App
const AppContainer = codePush(codePushOptions)( createAppContainer(switchNavigator));


export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

