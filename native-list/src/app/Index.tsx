import React from "react";
import { View, StyleSheet } from "react-native";
import ListDataComponents from "../components/ListDataComponents";
import ArrayOfObjectComponent from "../components/ArrayOfObjectComponent";

const Index = () => {
  return (
    <View style={styles.safeArea}>
      <View style={styles.container}>
        <ListDataComponents />
        <ArrayOfObjectComponent />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    height: "100%",
  },
  container: {
    padding: 16,
  },
  spacing: {
    height: 20,
  },
});

export default Index;
