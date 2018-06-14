/**
 * Created by Lincoln on 6/14/2018.
 */
import React from 'react';
import { StyleSheet, Text, View, WebView, TouchableOpacity, Image } from 'react-native';
import NavigationBar from '../components/NavigationBar';

export default class ProjectDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            canGoBack: false
        }
    }
    handleBack = () => {
        if(this.state.canGoBack) {
            this.refs.webview.goBack();
        } else {
            this.props.navigator.pop();
        }
    };
    getNavLeftBtn = () => {
        return <View style={{flexDirection:'row', alignItems:'center'}}>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={this.handleBack}>
                <Image source={require('../../res/images/ic_arrow_back_white_36pt.png')} style={{width:24,height:24}}/>
            </TouchableOpacity>
        </View>
    };
    handleNavStateChange = (s) => {
        this.setState({canGoBack: s.canGoBack})
    };

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    title='Project details page'
                    leftButton={this.getNavLeftBtn()}
                />
                <WebView
                    ref='webview'
                    startInLoadingState = {true}
                    source = {{uri: 'http://www.herowalking.com'}}
                    onNavigationStateChange={this.handleNavStateChange}
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