import {
    createStackNavigator,

} from 'react-navigation';

import MoreDetailView from '../../views/more/MoreDetailView'
import MoreView from '../../views/more/MoreView'



export function getMoreViewStack() {
    return createStackNavigator({
        MoreView: MoreView,
        MoreDetailView: MoreDetailView
    })
}