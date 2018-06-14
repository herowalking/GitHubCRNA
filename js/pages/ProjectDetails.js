/**
 * Created by Lincoln on 6/14/2018.
 */
import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';

export default class ProjectDetails extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <WebView
                    startInLoadingState = {true}
                    source = {{uri: 'http://www.herowalking.com'}}
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