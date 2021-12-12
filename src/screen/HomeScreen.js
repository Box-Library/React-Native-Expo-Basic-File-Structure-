import React from "react";
import { Text, StyleSheet, View } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is Home Screen</Text>
      <Text>Hello World</Text>
      <Text>Subscribe our Channel</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
