import React from "react";
import { View, Text, FlatList } from "react-native";

const ListDataComponents = () => {
  const information = ["Software", "Hacking", "RED HAT", "LOOPHOLES"];

  return (
    <View>
      <Text>ListDataComponents</Text>
      <FlatList
        data={information}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return <Text>{item}</Text>;
        }}
      />
    </View>
  );
};

export default ListDataComponents;
