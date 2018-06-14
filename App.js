import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Root from './js/pages/setup';
// console.disableYellowBox = true;

export default class GitHubCRNA extends Component {
    render() {
        return (
            <Root />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

AppRegistry.registerComponent('GitHubCRNA', () => GitHubCRNA);