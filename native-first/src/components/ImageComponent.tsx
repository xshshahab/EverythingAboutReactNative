import { View, Text, Image } from "react-native";
import React, { useState } from "react";

const ImageComponent = () => {
  const [image, setImage] = useState<boolean>(false);

  return (
    <View>
      <Text onPress={() => setImage(!image)}>Wan't to see magic</Text>

      {image && (
        <Image
          style={{ width: "full", height: 200 }}
          source={require("../assets/Flower.jpg")}
        />
      )}
    </View>
  );
};

export default ImageComponent;
