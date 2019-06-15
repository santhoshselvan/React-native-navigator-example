import React from 'react';
import {
    View, Text,
    StyleSheet,
    Button,
    TouchableOpacity,
    requireNativeComponent
} from 'react-native';


export default class MoreView extends React.Component {

    static navigationOptions = {
        header: null
        // title: "更多"
    }

    constructor(props) {
        super(props)
        this.state = {

        }
    };

    componentWillMount() {

    }

    componentDidMount() {

    }



    render() {
        return (
            <View style={styles.container}>
                <Text>
                    More View
                </Text>
                <TouchableOpacity onPress={() => {
                    // this.props.navigation.navigate("MoreDetailView")
                    this.props.navigation.openDrawer();
                }}>
                    <Text>打开抽屉视图</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
})