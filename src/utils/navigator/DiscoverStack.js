import {
    createStackNavigator,

} from 'react-navigation';

import DiscoverDetailView from '../../views/discover/DiscoverDetailView'
import DiscoverView from '../../views/discover/DiscoverView'



export function getDiscoverViewStack() {
    return createStackNavigator({
        DiscoverView: DiscoverView,
        DiscoverDetailView: DiscoverDetailView
    })
}