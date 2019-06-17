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
        title: "Home 3"
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
                    Home View 3
                </Text>
                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate("HomeDetailView")
                }}>
                    <Text>go to Home 6 Detail</Text>
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