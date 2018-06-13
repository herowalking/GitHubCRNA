/**
 * Created by Lincoln on 6/13/2018.
 */
import React from 'react';
import {StyleSheet, Text, View, FlatList } from 'react-native';
import NavigationBar from '../components/NavigationBar';

//包含两块内容，状态栏（静），滚动视图（动）
export default class PopularPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [{key:'Hello'}, {key:'World'}, {key:'Cup'}, {key:'Russia'}, {key:'2018'}]
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <NavigationBar/>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) => <Text>{item.key}</Text>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

