import { LinearGradient } from "expo-linear-gradient";
import { useEffect } from "react";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { setCustomText } from "react-native-global-props";

export default function Create() {
  // const customTextProps = {
  //   style: {
  //     fontFamily: "Patrick-Hand",
  //   },
  // };

  // // useEffect(() => {
  // setCustomText(customTextProps);
  // }, []);
  return (
    // <LinearGradient style={styles.container} colors={["#f7d6e0", "#fcdfc7"]}>
    <LinearGradient style={styles.container} colors={["#b2f7ef", "#eff6f6"]}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.heading}>Today, March 31</Text>
        <View style={styles.containerInt}>
          <Text style={styles.subheading}>What are you thinking of?</Text>
          <TextInput
            style={styles.input}
            // onChangeText={onChangeNumber}
            // value={number}
            // placeholder="useless placeholder"
            // keyboardType="numeric"
            multiline
          />

          <View>
            <Text style={styles.subheading}>How does it make you feel?</Text>

            <View style={styles.emotions}>
              <View style={styles.emotion}>
                <View style={styles.circle}></View>
                <Text style={styles.emotionText}>Upset</Text>
              </View>
              <View style={styles.emotion}>
                <View style={styles.circle}></View>
                <Text style={styles.emotionText}>Sad</Text>
              </View>
              <View style={styles.emotion}>
                <View style={styles.circle}></View>
                <Text style={styles.emotionText}>Neutral</Text>
              </View>
              <View style={styles.emotion}>
                <View style={styles.circle}></View>
                <Text style={styles.emotionText}>Happy</Text>
              </View>
              <View style={styles.emotion}>
                <View style={styles.circle}></View>
                <Text style={styles.emotionText}>Excited</Text>
              </View>
            </View>
          </View>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    fontFamily: "Nunito-Sans-Bold",
    // fontWeight: "bold",
  },
  subheading: {
    fontSize: 20,
    fontFamily: "Nunito-Sans-Bold",
  },
  emotionText: {
    fontSize: 15,
    fontFamily: "Nunito-Sans-Bold",
  },
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    // justifyContent: "center",
  },
  containerInt: {
    width: "100%",
    padding: 20,
  },
  emotion: {
    alignItems: "center",
    margin: 5,
    padding: 5,
    // backgroundColor: "green",
  },
  circle: {
    width: 50,
    height: 50,
    backgroundColor: "blue",
    borderRadius: 25,
  },
  emotions: {
    flexDirection: "row",
    // alignContent: "space-between",
  },
  input: {
    // height: 40,
    // width: "100%",
    height: 300,
    // margin: 12,
    marginVertical: 10,
    // borderWidth: 1,
    borderRadius: 20,
    padding: 20,
    backgroundColor: "rgba(33, 103, 115, 0.1)",
    fontFamily: "Nunito-Sans",
    fontSize: 15,
  },
  button: {
    backgroundColor: "#3fadc4",
    // width: "100%",
    padding: 10,
    alignItems: "center",
    marginVertical: 10,
    borderRadius: 20,
    shadowColor: "#216773",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.5,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Nunito-Sans-Bold",
  },
});
