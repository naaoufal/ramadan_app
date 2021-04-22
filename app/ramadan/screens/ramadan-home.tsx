import React,{useEffect} from 'react';
import { Text, View,TextInput, Button, Alert } from 'react-native';
import { RamadanController } from './controllers/ramadan-controller';
import { Ramadan } from '../../shared/models/ramadan.model'
import {RamadanEnum} from '../../shared/enums/ramadan.enum';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


export function RamadanHome() {

    let ramadanController = new  RamadanController();
    let ramadanEnum = RamadanEnum;
    
    const [username, onChangeUsername] = React.useState(""); 
    const [message, onChangeMessage] = React.useState("");
    const [latitude, onChangeLatitude] = React.useState("");
    const [longitude, onChangeLongitude] = React.useState(""); 

    function add(){
        console.log('add pressed')
        let ramadan = new Ramadan();

        ramadan.username=username;
        ramadan.message=message;
        ramadan.latitude=Number(latitude);
        ramadan.longitude=Number(longitude);

        ramadanController.Add(ramadan);
    }  

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>

      <Text> Test Booked : {ramadanEnum.BOOKED} & Test Free : {ramadanEnum.FREE}</Text>
      <Text> {(username === '') ? '' : 'Bonjour, Je suis : '+ username} </Text>

      <Text> {(message === '') ? '' : 'Mon message est : '+ message} </Text>
      <Text> {(latitude === '' && longitude === '') ? '' : 'Ma position est : '+ '('+latitude+','+longitude+')'} </Text>
      <TextInput
        placeholder={'entrer username'}
        onChangeText={onChangeUsername}
        value={username}
      />
      <TextInput
        placeholder={'entrer message'}
        onChangeText={onChangeMessage}
        value={message}
      />
      <TextInput
        placeholder={'entrer latitude'}
        onChangeText={onChangeLatitude}
        value={latitude}
      />
      <TextInput
        placeholder={'entrer longitude'}
        onChangeText={onChangeLongitude}
        value={longitude}
      />

      <Button
        title="Tester"
        onPress={() => {
            Alert.alert('Worked');
            add()
        }}
        color="blue"
      />
    </View>
  );
}

export function Test(){
    console.log('hola')
}


