import React from 'react';
import {
    View, Text,
    StyleSheet,
    Button,
    TouchableOpacity,
    requireNativeComponent
} from 'react-native';


export default class HomeDetailView extends React.Component {

    static navigationOptions = {
        // header: null
        title: "详细"
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
                    Home Detail View
                </Text>
                {/* <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate("")
                }}>
                    <Text>go to Home Detail</Text>
                </TouchableOpacity> */}
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