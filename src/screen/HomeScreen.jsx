import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function HomeScreen() {
  return (
    <>
      <View style={style.container}>
        <View
          style={{
            backgroundColor: "#10151d",
            width: "90%",
            height: "60%",
            borderRadius: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontWeight: 800, fontSize: 25 }}>
            Property
          </Text>
        </View>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 0.2,
  },
});
