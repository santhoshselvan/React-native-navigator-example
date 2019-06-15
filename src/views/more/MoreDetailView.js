import React from 'react';
import {
    View, Text,
    StyleSheet,
    Button,
    TouchableOpacity,
    requireNativeComponent
} from 'react-native';


export default class MoreDetailView extends React.Component {

    static navigationOptions = {
        // header: null
        title: "更多-详细"
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
                    More Detail View
                </Text>
                {/* <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate("")
                }}>
                    <Text>go to More Detail</Text>
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