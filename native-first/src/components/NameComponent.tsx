import React from "react";
import { Text } from "react-native";

interface NameComponentProps {
  name: string;
}

const NameComponent: React.FC<NameComponentProps> = ({ name }) => {
  return <Text>My Name is : {name}</Text>;
};

export default NameComponent;
