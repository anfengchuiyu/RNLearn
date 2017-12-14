/**
 * Created by zhe on 2017/12/9.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    ScrollView,
} from 'react-native';

export default class ListPage extends Component {

    constructor(props) {
        super(props)
        this.state = {netData: 'network data'};
    }

    fetchData() {
        console.log('Start network fetch')
        fetch('https://chroniclingamerica.loc.gov/newspapers.json')
            .then(response => response.json())
            .then(json => {
                console.log('fetch success');
                console.log(json)

                this.setState({netData: JSON.stringify(json)});
            })
            .catch(error => {
                console.log('fetch error');
            })

    }

    render() {
        return (
            <ScrollView style={ styles.scrollView }>
                <View style={styles.container}>
                    <Text style={{color: '#ffffff', fontSize: 30}}>列表页面</Text>
                    <Button
                        title="网络请求"
                        onPress={() => {
                        this.fetchData();
                    }}
                    />
                    <Text>{this.state.netData}</Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#e91e63',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
