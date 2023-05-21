import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Test({ emotion }) {
  //   console.log(props);
  switch (emotion) {
    case "sad":
      // code block
      return (
        <View style={styles.emotion}>
          <View style={[styles.circle, { backgroundColor: "red" }]}></View>
          <Text style={styles.emotionText}>Sad</Text>
        </View>
      );
    case "happy":
      return (
        <View style={styles.emotion}>
          <View style={[styles.circle, { backgroundColor: "green" }]}></View>
          <Text style={styles.emotionText}>Happy</Text>
        </View>
      );

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
