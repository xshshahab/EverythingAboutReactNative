import { Button } from "react-native";

export const AlertButton = () => {
  return (
    <Button
      onPress={() => alert("Someone clicked me!")}
      color={"skyblue"}
      title="Alert Button"
    />
  );
};
