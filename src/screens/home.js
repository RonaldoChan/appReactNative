import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export function Home(props) {
    return (

        <View style={{ flex: 1 }}>



            <View style={styles.view2}>
                <TouchableOpacity onPress={() => { props.navigation.navigate("Ronald") }} style={styles.touchable}>
                    <View>
                        <Text style={styles.texto}>
                            Ver un Ronald
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
        backgroundColor: 'skyblue',
    },

    touchable: {
        width: 150,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'white',
        borderTopLeftRadius: 25,
        borderBottomEndRadius: 25,
        backgroundColor: '#4C939E'
    },
    texto: {
        fontSize: 20,
        color: 'white',
    }
});

export default Home;