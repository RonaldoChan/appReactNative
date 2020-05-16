import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { color } from 'react-native-reanimated';

export default function diogo() {
    return (

        <View style={{ flex: 1 }}>

            <View style={{ position: 'absolute', right: 10, top: 10 }}>
                <Image source={require("../../assets/share.png")} style={{ resizeMode: 'contain', height: 20, width: 50 }} />
            </View>

            <View style={styles.tumi}>
                <Image source={require("../../assets/tumi.png")} style={{ resizeMode: 'contain', height: 35, }} />
            </View>

            <View style={styles.view1}>
                <View style={{ alignItems: 'center', margin: 25 }}>
                    <Text style={styles.textStyle}>
                        ¡vender sin contagiar
                    </Text>
                    <Text style={[styles.textStyle, { fontWeight: 'bold', }]}>es gratiola!</Text>

                </View>

            </View>

            <View style={styles.view1}>
                <View>
                    <Text style={styles.Datos}>
                        correo electronico o celular
                    </Text>
                </View>

                <View >
                    <Text style={styles.Datos}>
                        contraseña
                    </Text>
                </View>
            </View>

            <View style={styles.view1}>
                <Text style={{ color: '#BA1B39' }}>
                    uy, olvidé mi contraseña
                </Text>
            </View>

            <View style={styles.view1}>
                <View style={styles.btnIngresar}>
                    <Text style={{ color: 'white' }}>
                        INGRESAR
                    </Text>
                </View>
            </View>

            <View style={styles.view1}>
                <Text style={{ color: '#4C939E', fontSize: 16 }}>
                    Me contacto usando
                </Text>
            </View>

            <View style={{ flexDirection: 'row', marginLeft: 50, marginRight: 50 }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require("../../assets/facebook.png")} style={{ resizeMode: 'contain', height: 25, }} />
                </View>

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require("../../assets/google.png")} style={{ resizeMode: 'contain', height: 25, }} />
                </View>
            </View>


        </View>


    );
}


const styles = StyleSheet.create({
    view1: {
        margin: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },

    Datos: {

        borderWidth: 1,
        borderColor: '#4C939E',
        margin: 3,
        padding: 7,
        borderRadius: 15,
        width: 250,
        color: 'gray',
    },
    textStyle: {
        color: '#4C939E',
        fontSize: 25

    },
    btnIngresar: {

        borderWidth: 1,
        backgroundColor: '#4C939E',
        borderColor: '#4C939E',
        padding: 7,
        borderRadius: 25,
        width: 170,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
    },
    redesSociales: {
        borderWidth: 1,
        backgroundColor: '#4C939E',
        borderColor: '#4C939E',
        padding: 7,
        borderRadius: 25,
        width: 170,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tumi: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 35,

    }


});