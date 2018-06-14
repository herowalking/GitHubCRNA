/**
 * Created by Lincoln on 6/13/2018.
 */
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import NavigationBar from "../components/NavigationBar";
import CheckBox from 'react-native-check-box';

const popular_def_lans  = require('../../res/data/popular_def_lans.json');

export default class CustomKeyPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: popular_def_lans
        }
    }
    doBack = () => {
        this.props.navigator.pop();
    };
    doSave = () => {
        alert('Save');
    };
    getNavRightBtn = () => {
        return <View style={{flexDirection:'row', alignItems:'center'}}>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={this.doSave}>
                <View style={{marginRight:10}}>
                    <Text style={{fontSize:16, color:'#FFF'}}>Save</Text>
                </View>
            </TouchableOpacity>
        </View>
    };
    getNavLeftBtn = () => {
        return <View style={{flexDirection:'row', alignItems:'center'}}>
            <TouchableOpacity activeOpacity={0.7} onPress={this.doBack}>
                <Image  source={require('../../res/images/ic_arrow_back_white_36pt.png')} style={{width:24,height:24}}/>
            </TouchableOpacity>
        </View>
    };
    handleClick = (item) => {
        item.checked = !item.checked;
        this.setState({isModified:true}); //changed
    }
    renderCheckBox = (item) => {
        console.log(item.name + ', ' + item.checked);
        return <CheckBox
            style={{flex:1, padding:10}}
            onClick={() => this.handleClick(item)}
            leftText={item.name}
            isChecked={item.checked}
            unCheckedImage={<Image source={require('../../res/images/ic_check_box_outline_blank.png')} style={styles.checkbox}/>}
            checkedImage={<Image source={require('../../res/images/ic_check_box.png')} style={styles.checkbox}/>}
        />
    }
    renderViews = () => {
        let len = this.state.data.length;
        let views = []; //要绘制的所有多选框，装入views数组
        for(let i = 0, j = len - 2; i < j; i += 2) {
            views.push((
                <View key={`view_${i}`} style={{flexDirection:'row'}}>
                    {this.renderCheckBox(this.state.data[i])}
                    {this.renderCheckBox(this.state.data[i+1])}
                </View>
            ));
        }
        //偶数个，剩下最后两个多选框
        //奇数个，剩下最后一个多选框
        views.push(
            <View key={`view_${len-1}`} style={{flexDirection:'row'}}>
                {len % 2 === 0 ? this.renderCheckBox(this.state.data[len-2]) : <View style={{flex:1, padding:10}}></View>}
                {this.renderCheckBox(this.state.data[len-1])}
            </View>
        );
        return views;
    };
    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    title='Customized classify'
                    rightButton={this.getNavRightBtn()}
                    leftButton={this.getNavLeftBtn()}
                />
                <View style={{flexDirection:'column'}}>
                    {this.renderViews()}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    checkbox: {
        tintColor: '#63B8FF'
    }
});