import {
    createStackNavigator,

} from 'react-navigation';

import HomeDetailView from '../../views/home/HomeDetailView'
import HomeView from '../../views/home/HomeView'



export function getHomeViewStack() {
    return createStackNavigator({
        HomeView: HomeView,
        HomeDetailView: HomeDetailView
    })
}