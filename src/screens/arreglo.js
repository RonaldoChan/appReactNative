import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  FlatList
} from "react-native";
import { color } from "react-native-reanimated";
import Soda from "./soda";

export default function arreglo(props) {
  // creacion de data estatica
  var data = new Array(20).fill({}).map((item, index) => ({
    name: `Producto ${index + 1}`,
    price: index + 20,
    image:
      "https://dummyimage.com/600x600/fd8311/ffffff.png&text=" +
      "Chapa " +
      (index + 1),
    addres: `jr. hallame si puedes ${index + 1}`
  }));
  // [{ name: "Product 1": price: 20}]

  // metodo 1
  const renderListByFor = array => {
    const elements = [];
    for (let index = 0; index < array.length; index++) {
      elements.push(
        <View>
          <Text>{index}</Text>
        </View>
      );
    }

    return elements;
  };

  // metodo 2
  const renderListByMap = array => {
    return array.map((item, index) => {
      return (
        <View key={index}>
          <Text>{index}</Text>
        </View>
      );
    });
  };

  // meto 3
  const renderListByFlatList = array => {
    return (
      <FlatList
        keyExtractor={(_, index) => `${index + 100}`}
        data={array}
        renderItem={({ item, index }) => {
          return (
            <View>
              <Soda item={item} navigation={props.navigation}></Soda>
            </View>
          );
        }}
      />
    );
  };
  return <View style={{ flex: 1 }}>{renderListByFlatList(data)}</View>;
}
