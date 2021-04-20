import React, { Component } from 'react';
import { Button, StyleSheet, TextInput, ScrollView, ActivityIndicator, View } from 'react-native';
import firebase from '@/environment.dev.js';

export class reserveTable extends Component () {

    constructor () {
        super()
        this.db = firebase.firestore().collection('reservations')
        this.state = {
            username : '',
            message : '',
            latitude : '',
            longitude : ''
        }
    }

    currentInputValue = (val, prop) => {
        const state = this.state
        state[prop] = val
        this.setState(state)
    }
    
    storeResevation () {
        this.db().add({
            username : this.state.username,
            message : this.state.message,
            latitude : this.state.latitude,
            longitude : this.state.longitude
        }).then((res) => {
            this.setState({
                username : '',
                message : '',
                latitude : '',
                longitude : ''
            })
        }).catch((err) => {
            console.error("Error found: ", err);
        })
    }

    render () {
        return (
            <View>
                <View>
                    <Text> Reserver Une Table : </Text>
                </View>
                <View>
                    <TextInput
                    placeholder={Username}
                    value={this.state.username}
                    onChangeText={(val) => this.currentInputValue(val, 'username')}
                    />
                    <TextInput
                    placeholder={Message}
                    value={this.state.message}
                    onChangeText={(val) => this.currentInputValue(val, 'message')}
                    />
                    <TextInput
                    placeholder={Latitude}
                    value={this.state.latitude}
                    onChangeText={(val) => this.currentInputValue(val, 'latitude')}
                    />
                    <TextInput
                    placeholder={Longitude}
                    value={this.state.longitude}
                    onChangeText={(val) => this.currentInputValue(val, 'longitude')}
                    />
                </View>
                <View>
                    <Button
                    title = 'Reserver !!'
                    onPress={() => this.storeResevation()} 
                    />
                </View>
            </View>
        )
    }

}