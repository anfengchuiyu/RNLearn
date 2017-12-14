/**
 * Created by zhe on 2017/12/9.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Alert,
    Image,
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import ListPage from '../list/ListPage';


class HomePage extends Component {

    static navigationOption = {
        title: 'Home-主页',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={{color: '#ffffff', fontSize: 30}}>主页</Text>
                <Button
                    onPress={() => {
                        navigate('List')
                    }}
                    title="列表"/>

                <Image
                    style={{
                        width: 200,
                        height: 200,
                        resizeMode: Image.resizeMode.contain,
                    }}
                    source={require('../img/candices.jpeg')}/>
            </View>
        );
    }
}

const RootNavigator = StackNavigator({
    Home: {
        screen: HomePage,
        navigationOptions: {
            headerTitle: '主页',
            headerTitleStyle: {
                color: '#ffffff',
            },
            headerStyle: {
                backgroundColor: '#c2185b',
            }
        },
        mode: 'modal'
    },
    List: {
        screen: ListPage,
        navigationOptions: {
            headerTitle: '列表',
            headerTitleStyle: {
                color: '#ffffff',
            },
            headerStyle: {
                backgroundColor: '#c2185b',
            },
            gesturesEnabled: true,
        },
        headerMode: 'screen',
    },
});

export default class App extends Component<{}> {
    render() {
        return <RootNavigator />;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e91e63',
    }
});