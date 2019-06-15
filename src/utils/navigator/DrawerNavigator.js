import { Platform } from 'react-native';
import React from 'react';
import {
    createDrawerNavigator,
    DrawerItems
} from 'react-navigation';

import {
    View,
    Image,
    ScrollView,
    SafeAreaView,

} from 'react-native';


// import { getHomeViewStack } from './HomeStack'
import { getMoreViewStack } from './MoreStack'

import AboutView from '../../views/drawer/AboutView'

// const HomeViewStack = getHomeViewStack()
const MoreViewStack = getMoreViewStack()

const CustomDrawerComponent = (props) => (
    <SafeAreaView style={{ flex: 1, color: '#F5FCFF' }}>
        <View style={{ height: 150, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../../../assets/images/logo.png')} style={{ height: 120, width: 120, borderRadius: 60 }} />
        </View>
        <ScrollView>
            <DrawerItems {...props} />
        </ScrollView>
    </SafeAreaView>
)

export function getDrawerNavigator() {
    return createDrawerNavigator(
        {
            主页: MoreViewStack,
            关于: AboutView,
        },
        {
            contentComponent: CustomDrawerComponent,
            drawerWidth: 300,
            contentOptions: {
                activeTintColor: '#ED7A62'
            }
        }
    )
}