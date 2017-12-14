import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    Alert,
    TouchableNativeFeedback,
    FlatList,
} from 'react-native';
import {StackNavigator} from 'react-navigation';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class HomeScreen extends React.Component {
    static navigationOption = {
        title: 'Welcome',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <Button
                title="Go to"
                onPress={
                    () =>
                        navigate('Profile', {name: 'Jane'})
                }/>
        );
    }
}

export const SimpleApp = StackNavigator({
    Home: { screen: HomeScreen }

});

class SimpleText extends Component {
    render() {
        return (
            <Text>{this.props.name}</Text>
        );
    }
}

class SimpleImage extends Component {
    render() {
        return (
            <Image
                style={{width: 200, height: 150}}
                source={{uri: this.props.uri}}/>
        );
    }
}

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {showText: true};

        setInterval(() => {
            this.setState(previousState => {
                return {showText: !previousState.showText};
            })
        }, 1000);
    }

    render() {
        let display = this.state.showText ? this.props.text : '';
        return (
            <Text>{ display }</Text>
        );
    }

}

export default class App extends Component<{}> {
    render() {
        return <SimpleApp />;
    }
}

/*export default class App extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    componentWillMount() {
        //在渲染前调用,在客户端也在服务端
        console.log("componentWillMount");
    }

    componentDidMount() {
        //在第一次渲染后调用，只在客户端  生成了对应的DOM结构
        console.log("componentDidMount");
    }

    componentWillUnmount() {
        //在组件从 DOM 中移除的时候立刻被调用
        console.log("componentWillUnmount");
    }

    _onLongPress() {
        Alert.alert('You long-pressed the button');
    }

    render() {
        let pic = {
            uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512707328475&di=4c9f22c0e78ebbbbb5f83bfb6b59d8fe&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201607%2F17%2F20160717134311_tnA2z.jpeg'
        };

        return (
            <View style={styles.container}>
                <FlatList
                    data={[
                        {key: 'Devin'},
                        {key: 'Jackson'},
                        {key: 'James'},
                        {key: 'Joel'},
                        {key: 'John'},
                        {key: 'Jillian'},
                        {key: 'Jimmy'},
                        {key: 'Julie'},
                        {key: 'Julie'},
                        {key: 'Julie'},
                        {key: 'Julie'},
                        {key: 'Julie'},
                        {key: 'Julie'},
                        {key: 'Julie'},
                        {key: 'Julie'},
                        {key: 'Julie'},
                        {key: 'Julie'},
                        {key: 'Julie'},
                        {key: 'Julie'},
                        {key: 'Julie'},
                        {key: 'Julie'},
                        {key: 'Julie'},
                        {key: 'Julie'},
                        {key: 'Julie'},
                        {key: 'Julie'},
                        {key: 'Julie'},
                        {key: 'Julie'},
                        {key: 'Julie'},
                        {key: 'Julie'},
                        {key: 'Julie'},
                    ]}
                    renderItem={({item}) =>
                        <Text style={{padding: 20}}>{item.key}</Text>
                    }
                />
            </View>
        );
    }
}*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});


/*
 <Text style={styles.welcome}>
 Welcome to React Native!
 </Text>
 <TextInput
 palceholder="输入文本"
 onChangeText={(text) => this.setState({text})}/>
 <SimpleText name="刘哲"/>
 <SimpleImage uri={pic.uri}/>

 <Text>
 {this.state.text}
 </Text>
 <Button
 onPress={() => {
 Alert.alert('You tapped the button');
 }}
 title="Press Me"/>

 <TouchableNativeFeedback
 background={TouchableNativeFeedback.SelectableBackground()}
 onLongPress={this._onLongPress}>
 <View style={{"padding": 20}}>
 <SimpleText name="京津冀啊三等奖"/>
 </View>

 </TouchableNativeFeedback>


 <Blink text='I love to blink'/>
 */
