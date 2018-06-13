/**
 * Created by Lincoln on 6/13/2018.
 */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NavigationBar from '../components/NavigationBar';

export default class MyPage extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <NavigationBar title='My'/>
                <Text>RN development component template</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});