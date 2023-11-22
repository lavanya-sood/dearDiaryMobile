import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { setCustomText } from "react-native-global-props";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { AddThought } from "../../actions/thoughtAction";
import EmotionIcon from "../EmotionIcon";

export default function Create({ navigation }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const thoughts = data.thoughts;
  console.log(thoughts);

  const emotions = ["upset", "sad", "neutral", "happy", "excited"];

  const [thought, setThought] = useState("");
  const [emotion, setEmotion] = useState("");

  const saveThought = () => {
    let id = 1;
    if (thoughts.length >= 1) {
      id = thoughts[thoughts.length - 1].id + 1;
    }
    const currThought = {
      id: id,
      thought: thought,
      emotion: emotion,
      date: moment(new Date()),
    };
    // console.log(currThought);
    dispatch(AddThought(currThought));
    setThought("");
    setEmotion("");
    navigation.navigate("Home");
  };
  // const customTextProps = {
  //   style: {
  //     fontFamily: "Patrick-Hand",
  //   },
  // };

  // // useEffect(() => {
  // setCustomText(customTextProps);
  // }, []);

  const onEmotionPress = (emote) => {};

  return (
    // <LinearGradient style={styles.container} colors={["#f7d6e0", "#fcdfc7"]}>
    <LinearGradient style={styles.container} colors={["#b2f7ef", "#eff6f6"]}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.heading}>Today, March 31</Text>
        <View style={styles.containerInt}>
          <Text style={styles.subheading}>What are you thinking of?</Text>
          <TextInput
            style={styles.input}
            onChangeText={setThought}
            value={thought}
            // placeholder="useless placeholder"
            // keyboardType="numeric"
            multiline
          />

          <View>
            <Text style={styles.subheading}>How does it make you feel?</Text>
            <FlatList
              data={emotions}
              // style={styles.emotions}
              horizontal
              scrollEnabled={false}
              renderItem={({ item }) => (
                <Pressable
                  style={styles.emotion}
                  onPress={() => setEmotion(item)}
                >
                  <EmotionIcon emotion={item} />
                  <Text style={styles.emotionText}>{item}</Text>
                </Pressable>
              )}
            />
            {/* <View style={styles.emotions}> */}
            {/* {console.log(emotions)} */}
            {/* {emotions.map((emote) => {
                <Pressable
                  style={styles.emotion}
                  onPress={() => setEmotion(emote)}
                >
                  <EmotionIcon emotion={emote} />
                  <Text style={styles.emotionText}>Sad</Text>
                </Pressable>;
              })} */}

            {/* <Pressable
                style={styles.emotion}
                onPress={() => setEmotion("upset")}
              >
                <EmotionIcon emotion="upset" />
                <Text style={styles.emotionText}>Upset</Text>
              </Pressable>
              <Pressable
                style={styles.emotion}
                onPress={() => setEmotion("sad")}
              >
                <EmotionIcon emotion="sad" />
                <Text style={styles.emotionText}>Sad</Text>
              </Pressable>
              <Pressable
                style={styles.emotion}
                onPress={() => setEmotion("neutral")}
              >
                <EmotionIcon emotion="neutral" />
                <Text style={styles.emotionText}>Neutral</Text>
              </Pressable>
              <Pressable
                style={styles.emotion}
                onPress={() => setEmotion("happy")}
              >
                <EmotionIcon emotion="happy" />
                <Text style={styles.emotionText}>Happy</Text>
              </Pressable>
              <Pressable
                style={styles.emotion}
                onPress={() => setEmotion("excited")}
              >
                <EmotionIcon emotion="excited" />
                <Text style={styles.emotionText}>Excited</Text>
              </Pressable>*/}
            {/* </View> */}
          </View>
          <Pressable style={styles.button} onPress={saveThought}>
            <Text style={styles.buttonText}>Save</Text>
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
