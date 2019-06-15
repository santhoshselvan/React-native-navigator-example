import { createBottomTabNavigator } from 'react-navigation';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export function getBottomTabbar(HomeViewStack, DiscoverViewStack, DrawerNavigator) {

    return createBottomTabNavigator(
        {
            主页: HomeViewStack,
            发现: DiscoverViewStack,
            更多: DrawerNavigator
        },

        {
            // initialRouteName: "消息"
            defaultNavigationOptions: ({ navigation }) => ({
                tabBarIcon: ({ focused, horizontal, tintColor }) => {
                    const { routeName } = navigation.state;
                    let IconComponent = Ionicons;
                    let iconName;
                    if (routeName === '主页') {
                        iconName = `ios-navigate`;
                        // Sometimes we want to add badges to some icons. 
                        // You can check the implementation below.
                        // IconComponent = HomeIconWithBadge;
                        return <IconComponent name={iconName} size={25} color={tintColor} />;
                    } else if (routeName === '发现') {
                        iconName = `ios-chatbubbles`;
                        return <IconComponent name={iconName} size={25} color={tintColor} />;
                    } else {
                        iconName = `ios-more`;
                        return <IconComponent name={iconName} size={25} color={tintColor} />;
                    }

                    // You can return any component that you like here!
                    // return <IconComponent name={iconName} size={25} color={tintColor} />;
                },
            }),
            tabBarOptions: {
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            },
            initialRouteName: "主页"

        },
    )
}