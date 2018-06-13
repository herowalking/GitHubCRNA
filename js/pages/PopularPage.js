/**
 * Created by Lincoln on 6/13/2018.
 */
import React from 'react';
import {StyleSheet, Text, View, FlatList } from 'react-native';
import NavigationBar from '../components/NavigationBar';
import ScrollableTabView from 'react-native-scrollable-tab-view';

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
            dataSource: [{key:'World'}, {key:'Cup'}, {key:'Russia'}, {Key:'2018'}]
        }
    }
    loadData = () => {
        fetch(`https://api.github.com/search/repositories?q=${this.props.tabLabel}&sort=stars`)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({
                    dataSource: json.items,
                })
            })
    }
    componentDidMount = () => {
        this.loadData();
    }
    render() {
        return (
            <FlatList
                data = {this.state.dataSource}
                renderItem = {({item}) => <Text>{item.full_name}</Text>}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

