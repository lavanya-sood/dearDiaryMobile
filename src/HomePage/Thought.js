import { LinearGradient } from "expo-linear-gradient";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CalendarStrip from "react-native-calendar-strip";
import moment from "moment";
import { useEffect, useState } from "react";
import EmotionIcon from "../EmotionIcon";
// import { EmotionIcon } from "../helper/EmotionIcon";
export default function Thought(props) {
  //   console.log(props);
  return (
    <View style={styles.thoughtBox}>
      {/* <EmotionIcon emotion={props.emotion} /> */}
      <EmotionIcon emotion={props.emotion} />
      <View style={styles.thoughtText}>
        <Text style={styles.heading}>{props.title}</Text>
        <Text style={styles.subheading}>{props.time.format("LT")}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  thoughtBox: {
    backgroundColor: "#f7fbff",
    width: "90%",
    padding: 20,
    borderRadius: 15,
    margin: 10,

    shadowColor: "#7bdff2",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.5,
    elevation: 5,
    flexDirection: "row",
  },
  // goalsBox: {
  //   backgroundColor: "pink",
  //   width: "80%",
  //   padding: 20,
  //   borderRadius: 15,
  //   margin: 10,
  // },
  heading: {
    fontSize: 20,
    fontFamily: "Nunito-Sans-Bold",
    // fontWeight: "bold",
  },
  subheading: {
    fontSize: 15,
    fontFamily: "Nunito-Sans",
  },
  thoughtText: {
    marginLeft: 10,
    justifyContent: "center",
  },
});
