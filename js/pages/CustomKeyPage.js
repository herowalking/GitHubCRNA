/**
 * Created by Lincoln on 6/13/2018.
 */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class CustomKeyPage extends React.Component {
    render() {
        return (
            <View style={styles.container}>
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