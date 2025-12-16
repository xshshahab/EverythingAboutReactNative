import { View } from "react-native";
import React from "react";
import Name from "../components/Name";
import Age from "../components/Age";
import TwitterHandle from "../components/TwitterHandle";
import ImageComponents from "../components/ImageComponents";
import InternalCss from "../components/InternalCss";

const Index = () => {
  return (
    <View>
      <Name />
      <Age />
      <TwitterHandle />
      <ImageComponents />
      <InternalCss />
    </View>
  );
};

export default Index;
