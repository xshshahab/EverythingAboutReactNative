import React from "react";
import { View, Text, Image } from "react-native";

const ImageComponents = () => {
  return (
    <View>
      <Text>This is my Image components</Text>
      <Image
        source={require("../assets/CaptainAmerica.jpg")}
        style={{
          width: "auto",
          height: 200,
        }}
      />
    </View>
  );
};

export default ImageComponents;
