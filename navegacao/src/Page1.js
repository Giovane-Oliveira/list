// src/Page1.js

import React from 'react';
import { View, Button, StyleSheet, AppRegistry, Image } from 'react-native';


const Page1 = ({ navigation }) => (
  <View style={style.container}>
        <View>
        <Image  style={{bottom: 100}}
          source={require('./logo.png')}
        />
      </View>
    <View style={style.btn}>
      <View style={style.n}>
        <Button
          title="NOVA LISTA"
          onPress={() => navigation.navigate('Novo')}
          color='black'
        />
      </View>
      <View style={style.h}>
        <Button
          title="HISTÓRICO"
          onPress={() => navigation.navigate('Historico')}
          color='black'
        />
      </View>
      <View style={style.f}>
        <Button
          title="GRUPOS"
          onPress={() => navigation.navigate('Grupos')}
          color='black'
        />
      </View>
    </View>
  </View>
);

Page1.navigationOptions = {
  title: 'LIST.IT',
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center'

  },
  btn: {
    bottom: 120,
    width: 300,
    height: 40,
    borderRadius: 10,
    margin: 50,
  },
  n: {
    marginBottom: 20,

  },
  h: {
    marginBottom: 20,
  },
  f: {
    marginBottom: 20,
  },
});

export default Page1;