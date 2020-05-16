import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';

export default function ronald() {
    return (

        <View>
            <Image source={require("./ronald.png")} style={{ width: Dimensions.get("window").width, height: Dimensions.get("window").height, resizeMode: "cover" }} />
        </View>

    );
}