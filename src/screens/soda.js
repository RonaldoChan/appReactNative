import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import { color } from 'react-native-reanimated';


export default function soda() {
  return (

    <ScrollView style={styles.pantalla}>


      <View style={[styles.bordes, { flexDirection: 'row' }]}>

        <View id='imagen' style={{ justifyContent: 'center', alignItems: 'center', flex: 1, right: 30 }}>
          <Image source={require("./../../assets/soda.png")} style={{ resizeMode: 'contain', height: 100, margin: 10 }} />
        </View>



        <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', flex: 1, right: 65, bottom: 20, }}>

          <View id='empresa' >
            <Text style={styles.texto}>
              Don Fausto y Sus Amigos
            </Text>

          </View >

          <View id='direccion'>
            <Text style={{ color: 'gray', fontSize: 10 }}>
              Jr: libertad, al costado del huairuro
            </Text>
          </View>

          <View id='nombre producto' style={{ flexDirection: 'row' }}>
            <View style={{ marginEnd: 10 }}>
              <Text>
                Chapa de botella
              </Text>
            </View>
            <Text>
              S/20.00
            </Text>
          </View>

          <View >
            <View >
              <Image source={require("./../../assets/tumi.png")} style={{ resizeMode: 'contain', height: 25, top: 25, right: 50, }} />
            </View>
          </View>


        </View>


      </View>
    </ScrollView >


  );
}

const styles = StyleSheet.create({

  pantalla: {
    flex: 1,
    margin: 10,
  },

  bordes: {
    borderWidth: 1,
    borderColor: '#4C939E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontWeight: 'bold',
  }

});
