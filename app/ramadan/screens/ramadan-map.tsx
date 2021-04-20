import React,{useEffect} from 'react';
import { Text, View } from 'react-native';
import {RamadanMapsEnum} from '../../shared/enums/ramdan_maps.enum';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

export function RamadanMap() {
    let ramadanMapsEnum = RamadanMapsEnum;  
    let coordinates_marker = {
        latitude : 32.296418099951424,
        longitude : -9.241842831480078
    }

  return (
    <View>
      
      <MapView
        provider = {PROVIDER_GOOGLE}
        initialRegion = {{
          latitude : 32.29512789087331,
          longitude : -9.233774559186537,
          latitudeDelta : 0.0222,
          longitudeDelta : 0.0121 
        }}
        >
            <Marker coordinate = {coordinates_marker}/>
        </MapView>
        <Text>  {ramadanMapsEnum.Card}  :) </Text>
 
    </View>
  );
}

export function Test(){
    console.log('hola')
}
