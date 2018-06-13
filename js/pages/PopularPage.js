/**
 * Created by Lincoln on 6/13/2018.
 */
import React from 'react';
import {StyleSheet, Text, View, FlatList, RefreshControl } from 'react-native';
import NavigationBar from '../components/NavigationBar';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ProjectRow from '../components/ProjectRow';

//包含两块内容，状态栏（静），滚动视图（动）
export default class PopularPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            languages: ['IOS', 'Android', 'Java', 'JavaScript']
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <NavigationBar/>
                <ScrollableTabView
                    tabBarBackgroundColor='#63B8FF'
                    tabBarActiveTextColor='#FFF'
                    tabBarInactiveTextColor='#F5FFFA'
                    tabBarUnderlineStyle={{backgroundColor:'#E7E7E7', height:2}}>
                    {
                        this.state.languages.map((item, i) => {
                            return (<PopularTab key={`tab${i}`} tabLabel={item}/>)
                        })
                    }
                </ScrollableTabView>
            </View>
        );
    }
}

class PopularTab extends React.Component {
    static defaultProps = {
        tabLabel: 'JavaScript'
    }
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            isLoading: true
        }
    }
    _keyExtractor = (item, index) => ('' + item.id + index);

    //加载数据
    loadData = () => {
        this.setState({isLoading:true});
        //请求网络
        fetch(`https://api.github.com/search/repositories?q=${this.props.tabLabel}&sort=stars`)
            .then(response => response.json())
            .then(json => {
                // console.log(json);
                //更新dataSource
                this.setState({
                    dataSource: json.items,
                    isLoading: false //隐藏进度条
                })
            }).catch((error) => {
                console.log(error);
        }).done();
    }
    componentDidMount = () => {
        this.loadData();
    }
    handleRefresh = () => {
        this.loadData();
    }
    renderRow = ({item}) => <ProjectRow item={item}/>
    render() {
        return (
            <FlatList
                data = {this.state.dataSource}
                keyExtractor={this._keyExtractor}
                renderItem = {this.renderRow}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isLoading}
                        onRefresh={this.handleRefresh}
                        tintColor="#63B8FF"
                        title='正在加载...'
                        titleColor="#63B8FF"
                        colors={['green', 'yellow', 'blue']}
                        progressBackgroundColor='tomato'
                    />
                }
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

