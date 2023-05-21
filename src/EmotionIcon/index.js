import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";

export default function EmotionIcon({ emotion }) {
  //   console.log(props);
  switch (emotion) {
    case "upset":
      return (
        <View style={[styles.circle, { backgroundColor: "black" }]}></View>
      );
    case "sad":
      return <View style={[styles.circle, { backgroundColor: "red" }]}></View>;
    case "neutral":
      return <View style={[styles.circle, { backgroundColor: "blue" }]}></View>;
    case "happy":
      return (
        <View style={[styles.circle, { backgroundColor: "green" }]}></View>
      );

    case "excited":
      return <View style={[styles.circle, { backgroundColor: "pink" }]}></View>;
    default:
    // code block
  }
}

const styles = StyleSheet.create({
  emotion: {
    // backgroundColor: "green",
  },
  circle: {
    width: 50,
    height: 50,
    backgroundColor: "blue",
    borderRadius: 25,
  },

  emotionText: {
    fontSize: 15,
    fontFamily: "Nunito-Sans-Bold",
  },
});
