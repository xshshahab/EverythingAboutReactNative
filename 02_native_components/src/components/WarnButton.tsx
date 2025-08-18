import { Button } from "react-native";

const WarnButton = () => {
  return (
    <Button
      onPress={() => console.warn("Warning!")}
      title="Warn Button"
      color={"red"}
    />
  );
};

export default WarnButton;
