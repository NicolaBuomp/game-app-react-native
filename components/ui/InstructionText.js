import { StyleSheet, Text, View } from "react-native";
import React from "react";

const InstructionText = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  text: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
  },
});
