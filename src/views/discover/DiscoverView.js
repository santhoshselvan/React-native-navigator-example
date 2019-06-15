import React from 'react';
import {
    View, Text,
    StyleSheet,
    Button,
    TouchableOpacity,
    requireNativeComponent
} from 'react-native';


export default class DiscoverView extends React.Component {

    static navigationOptions = {
        // header: null
        title: "发现"
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
                    Discover View
                </Text>
                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate("DiscoverDetailView")
                }}>
                    <Text>go to Discover Detail</Text>
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