import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";

export default function ButtonNew({ size, color }) {
  const isFocused = useIsFocused();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isFocused ? "#633ae7" : "#7653e7" }
      ]}
    >
      <Entypo name="plus" size={size} color={isFocused ? "#fff" : "#F8F8F8"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20
  }
});

function getBackgroundColor(opacity) {
  return `rgba(103, 4, 204, ${opacity})`;
}
