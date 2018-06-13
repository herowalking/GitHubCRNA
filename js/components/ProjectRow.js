/**
 * Created by Lincoln on 6/13/2018.
 */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class ProjectRow extends React.Component {
    static defaultProps = {
        item: {}
    }
    render() {
        const item = this.props.item;
        return (
            <View style={styles.container}>
                <Text>{item.full_name}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});