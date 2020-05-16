import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export function Home() {
    return (

        <View style={{ flex: 1 }}>

            <View style={styles.container}>
                <Text>papi!</Text>
            </View>

            <View style={styles.view2}>
                <Text style={{ color: 'white' }}>papi!</Text>
                <TouchableOpacity style={styles.touchable}>
                    <View>
                        <Text>
                            hola
          </Text>
                    </View>
                </TouchableOpacity>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },

    view2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
    },

    touchable: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,

    },
});

export default App;