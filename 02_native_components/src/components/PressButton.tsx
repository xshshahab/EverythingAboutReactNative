import { Button } from "react-native";

const PressButton = () => {
  const handlePress = () => {
    console.log("Pressed!!");
  };
  return <Button onPress={handlePress} title="Click & check the console" />;
};

export default PressButton;
