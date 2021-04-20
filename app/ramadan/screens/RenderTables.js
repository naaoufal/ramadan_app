import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from '@/database/firebaseDb';

export class TableData extends Component () {

    constructor () {
        super()
        this.fstore = firebase.firestore().collection('tables')
        this.state = {
            tableArr : []
        }
    }

    // executed after the first render only on the client side
    componentDidMount() {
        this.tables = this.fstore.onSnapshot(this.getCollection);
    }

    // executed before rendering, on both the server and the client side
    componentWillUnmount(){
        this.tables();
    }

    getData = (querySnapshot) => {
        const userArr = [];
        querySnapshot.forEach((res) => {
          const { username, message, latitude, longitude } = res.data();
          userArr.push({
            key: res.id,
            res,
            username,
            message,
            latitude,
            longitude
          });
        });
        this.setState({
          tableArr
       });
    }

    render() {
        return (
            <View>
                {this.state.tableArr.map((table, i) => {
                    return (
                        <ListItem
                        key = {i}
                        title = {table.name}
                        />
                    )
                })}
            </View>
        )
    }
}