import { View, Text, StyleSheet } from "react-native";
import React from "react";

const InternalCss = () => {
  return (
    <View>
      <Text style={styles.textStyle}>InternalCss</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: "#1b1b1bff",
    fontSize: 30,
    backgroundColor: "#f2f2f2",
    padding: 10,
  },
});

export default InternalCss;
