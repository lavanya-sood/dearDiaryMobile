import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function HomePage() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  console.log("DATA");
  console.log(data);
  return (
    <LinearGradient style={styles.container} colors={["#f7d6e0", "#fcdfc7"]}>
      {/* <Text>Home Page</Text> */}

      <View style={styles.parent}>
        <View style={styles.child}>
          <Text>Today</Text>
        </View>
      </View>
      <ScrollView>
        <View>
          <Text>Hey</Text>
        </View>
        <View>
          <Text>Text2</Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
  },
  parent: {
    height: "35%",
    width: "100%",
    transform: [{ scaleX: 2 }],
    borderBottomStartRadius: 200,
    borderBottomEndRadius: 200,
    overflow: "hidden",
  },
  child: {
    flex: 1,
    transform: [{ scaleX: 0.5 }],

    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
