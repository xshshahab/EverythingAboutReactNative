import { View } from "react-native";
import Name from "../components/Name";
import Age from "../components/Age";
import { Subject } from "../components/Subject";
import XHandle from "../components/XHandle";
import ButtonComponents from "../components/ButtonComponents";
import PressButton from "../components/PressButton";
import WarnButton from "../components/WarnButton";
import { AlertButton } from "../components/AlertButton";

const Index = () => {
  return (
    <View>
      <Name />
      <Age />
      <XHandle />
      <Subject />
      <ButtonComponents />
      <PressButton />
      <WarnButton />
      <AlertButton />
    </View>
  );
};

export default Index;
