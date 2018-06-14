/**
 * Created by Lincoln on 6/13/2018.
 */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NavigationBar from '../components/NavigationBar';
import CustomKeyPage from './CustomKeyPage';
import ProjectDetails from './ProjectDetails';

export default class MyPage extends React.Component {
    // 跳转
    gotoCustomKey = () => {
        this.props.navigator.push({
            component: CustomKeyPage
        })
    }
    // 跳转
    gotoProjectDetails = () => {
        this.props.navigator.push({
            component:ProjectDetails
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <NavigationBar title='My'/>
                <View style={{flexDirection:'column', alignItems:'center', marginTop:30}}>
                    <Text onPress={this.gotoCustomKey}>Page jump</Text>
                    <Text onPress={this.gotoProjectDetails}>WebVien jump</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});