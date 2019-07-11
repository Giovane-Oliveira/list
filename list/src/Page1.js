// src/Page1.js

import React from 'react';
import { View, Button, StyleSheet, AppRegistry, Image } from 'react-native';


const Page1 = ({ navigation }) => (
  <View style = {style.container}>
    <View style = {style.btn}>
    <View style = {style.n}>
      <Button 
        title="NOVA LISTA"
        onPress={() => navigation.navigate('Novo') }
        color =  'black'
      />
      </View>
      <View style = {style.h}>
      <Button 
        title="HISTÓRICO"
        onPress={() => navigation.navigate('Historico') }
        color =  'black'
      />
      </View>
      <View style = {style.f}>
      <Button 
        title="GRUPOS"
        onPress={() => navigation.navigate('Grupos') }
        color =  'black'
      />
      </View>
    </View>
  </View>
);

Page1.navigationOptions = {
  title: 'LIST.IT',
}

const style = StyleSheet.create ({
  container : {
    flex: 1,
    backgroundColor: 'lightgray',
    justifyContent: 'center'

  },
  btn: {

    margin: 50,
  },
  n: {
    backgroundColor: 'red',
    marginBottom: 10,
    textShadowColor: 'black'
  },
  h: {
    marginBottom: 10,
  },
  f: {
    marginBottom: 10,
  },
});

export default Page1;