import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import upset from "../../assets/emotions/upset.png";
import sad from "../../assets/emotions/sad.png";
import neutral from "../../assets/emotions/neutral.png";
import happy from "../../assets/emotions/happy.png";
import excited from "../../assets/emotions/excited.png";

export default function EmotionIcon({ emotion }) {
  //   console.log(props);
  switch (emotion) {
    case "upset":
      return (
        // <View style={[styles.circle, { backgroundColor: "black" }]}></View>
        <Image source={upset} style={styles.image} />
      );
    case "sad":
      return (
        // <View style={[styles.circle, { backgroundColor: "black" }]}></View>
        <Image source={sad} style={styles.image} />
      );
    case "neutral":
      return (
        // <View style={[styles.circle, { backgroundColor: "black" }]}></View>
        <Image source={neutral} style={styles.image} />
      );
    case "happy":
      return (
        // <View style={[styles.circle, { backgroundColor: "black" }]}></View>
        <Image source={happy} style={styles.image} />
      );

    case "excited":
      return (
        // <View style={[styles.circle, { backgroundColor: "black" }]}></View>
        <Image source={excited} style={styles.image} />
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
  image: {
    width: 50,
    height: 50,
  },

  emotionText: {
    fontSize: 15,
    fontFamily: "Nunito-Sans-Bold",
  },
});
