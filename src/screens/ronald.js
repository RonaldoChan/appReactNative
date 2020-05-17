import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions
} from "react-native";

export default function ronald(props) {
  console.log("propsRecibidas de ronald", props);
  const { params: { item: { addres, image } = {} } = {} } = props.route;
  return (
    <View>
      <Image
        source={{ uri: image }}
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
          resizeMode: "contain"
        }}
      />
    </View>
  );
}
