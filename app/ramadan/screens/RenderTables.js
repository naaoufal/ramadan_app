import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from '@/database/firebaseDb';

export class TableData extends Component () {

    constructor () {
        super()
        this.fstore = firebase.firestore().collection('tables')
    }

    render() {
        return (
            <View></View>
        )
    }
}