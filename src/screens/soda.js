import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView
} from "react-native";
import { color } from "react-native-reanimated";

export default function soda(props) {
  const {
    item: { name = "Chapa", addres = "jr. x", price = "30", image = null } = {}
  } = props;
  const { navigation } = props;

  return (
    <TouchableOpacity
      style={styles.pantalla}
      onPress={() => {
        navigation.navigate("Ronald", { item: props.item });
      }}
    >
      <View style={[styles.bordes, { flexDirection: "row" }]}>
        <View
          id="imagen"
          style={{
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            right: 30
          }}
        >
          {image !== null ? (
            <Image
              source={{
                uri: image
              }}
              style={{
                resizeMode: "contain",
                height: 100,
                width: 100,
                margin: 10
              }}
            />
          ) : (
            <Image
              source={require("../../assets/soda.png")}
              style={{
                resizeMode: "contain",
                height: 100,

                margin: 10
              }}
            />
          )}
        </View>

        <View
          style={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flex: 1,
            right: 65,
            bottom: 20
          }}
        >
          <View id="empresa">
            <Text style={styles.texto}>{name}</Text>
          </View>

          <View id="direccion">
            <Text style={{ color: "gray", fontSize: 10 }}>{addres}</Text>
          </View>

          <View id="nombre producto" style={{ flexDirection: "row" }}>
            <View style={{ marginEnd: 10 }}>
              <Text>Chapa de botella</Text>
            </View>
            <Text>S/{price}</Text>
          </View>

          <View>
            <View>
              <Image
                source={require("./../../assets/tumi.png")}
                style={{
                  resizeMode: "contain",
                  height: 25,
                  top: 25,
                  right: 50
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    flex: 1,
    margin: 10
  },

  bordes: {
    borderWidth: 1,
    borderColor: "#4C939E",
    justifyContent: "center",
    alignItems: "center"
  },
  texto: {
    fontWeight: "bold"
  }
});
