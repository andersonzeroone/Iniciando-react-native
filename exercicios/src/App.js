import React, { Component} from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Simples from './componentes/simples'
import ParImpar from './componentes/ParImpar'
import {Inverter, MegaSena} from './componentes/Milti'

export default class App extends Component{
    render() {
      return (
        <View style={styles.container}>

            <Simples texto='Flexivel!!' />
            {/* <Text style={styles.f20}>Hello word!!</Text> */}
            <ParImpar numero={4} />
            <Inverter texto='React Native' />
            <MegaSena numeros={9} />
        </View>
      )
    }
}

const styles = StyleSheet.create({
   container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

   },
   f20: {
     fontSize: 40
   }
})