import React, {Component} from 'react';
import {
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';

import {getHomeViewStack} from './src/utils/navigator/HomeStack'
import {getDiscoverViewStack} from './src/utils/navigator/DiscoverStack'
import {getMoreViewStack} from './src/utils/navigator/MoreStack'
import {getBottomTabbar} from './src/utils/navigator/BottomTabNavigator'
import {getDrawerNavigator} from './src/utils/navigator/DrawerNavigator'

const CodePush = require("react-native-code-push");

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

//创建App
const AppContainer = createAppContainer(switchNavigator);

class App extends Component {
  render() {
    return (
        <AppContainer/>
    );
  }
}

let options = {checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME, installMode: CodePush.InstallMode.ON_NEXT_RESUME};
App = CodePush(options)(App);

export default App;

