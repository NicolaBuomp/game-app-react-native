import { StyleSheet, Text, View } from "react-native";
import React from "react";

function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text>#{roundNumber}</Text>
      <Text>Opponent's Guess: {guess}</Text>
    </View>
  );
}

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    marginVertical: 8,
    flexDirection: "space-between",
    width: "100%",
    elevation: 4,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});
