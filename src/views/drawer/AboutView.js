import React from 'react';
import {
    View, Text,
    StyleSheet,
    Button,
    TouchableOpacity,
    requireNativeComponent
} from 'react-native';


export default class HomeView extends React.Component {

    static navigationOptions = {
        // header: null
        title: "关于"
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

                <TouchableOpacity style={styles.close}

                    onPress={() => {
                        this.props.navigation.navigate("MoreView")
                    }}>
                    <Text>关闭</Text>
                </TouchableOpacity>

                <Text>
                    About View
                </Text>

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

    close: {
        position: 'absolute',
        left: 20,
        top: 40,
    }
})