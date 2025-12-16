import { View, Text, Button, TouchableOpacity, Pressable } from "react-native";
import React, { useState } from "react";
import Greet from "../components/Greet";
import NameComponent from "../components/NameComponent";
import TextComponent from "../components/TextComponent";
import ImageComponent from "../components/ImageComponent";

const index = () => {
  const [isVisible, setIsVisible] = useState(false);

  const clickHandler = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View>
      <Text>Hello Syphar Bhauuu..</Text>
      <Greet />
      <NameComponent name={"Syphar Dev"} />
      <TextComponent />
      <Button title="Click me" onPress={clickHandler} />

      {isVisible && (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            margin: 10,
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold" }}>
            Awww! Finally You Visible me.
          </Text>

          <TouchableOpacity
            onPress={clickHandler}
            style={{
              backgroundColor: "black",
              paddingVertical: 8,
              paddingHorizontal: 16,
              borderRadius: 5,
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>Hide me</Text>
          </TouchableOpacity>
        </View>
      )}

      <Pressable onPress={() => alert("Pressed!!")}>
        <Text style={{ marginTop: 10 }}>Pressable Button Click </Text>
      </Pressable>

      <ImageComponent />
    </View>
  );
};

export default index;
