import { View, Text, Button } from "react-native";
import React from "react";

const ButtonComponents = () => {
  return (
    <View>
      <Text>Let's explore button</Text>
      <Button title="Know me" />
      <Button title="Background Color" color={"#333"} />
      <Button title="Disable Button" color={"crimson"} disabled />
    </View>
  );
};

export default ButtonComponents;
