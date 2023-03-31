import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CalendarStrip from "react-native-calendar-strip";
import moment from "moment";

export default function HomePage() {
  const dispatch = useDispatch();
  // let datesWhitelist = [
  //   {
  //     start: moment(),
  //     end: moment().add(3, "days"), // total 4 days enabled
  //   },
  // ];
  const startDate = moment().subtract(1, "days");
  let datesBlacklist = [
    {
      start: moment().add(1, "days"),
      end: moment().add(1, "years"), // total 4 days enabled
    },
  ];
  const data = useSelector((state) => state);
  const today = moment();
  console.log("DATA");
  console.log(data);
  return (
    <LinearGradient style={styles.container} colors={["#b2f7ef", "#eff6f6"]}>
      {/* <Text>Home Page</Text> */}

      <View style={styles.parent}>
        <View style={styles.child}>
          <Text>Today</Text>
          <Text>Today</Text>
          <Text>Today</Text>
          {/* <CalendarStrip
            scrollable
            calendarAnimation={{ type: "sequence", duration: 30 }}
            daySelectionAnimation={{
              type: "border",
              duration: 200,
              borderWidth: 1,
              borderHighlightColor: "white",
            }}
            style={{ height: 100 }}
            // calendarHeaderStyle={{ color: "white" }}
            showMonth={false}
            calendarColor={"#7743CE"}
            dateNumberStyle={{ color: "white", fontSize: 30 }}
            dateNameStyle={{ color: "white", fontSize: 15 }}
            highlightDateNumberStyle={{ color: "white", fontSize: 30 }}
            highlightDateNameStyle={{ color: "yellow" }}
            disabledDateNameStyle={{ color: "grey" }}
            disabledDateNumberStyle={{ color: "grey" }}
            iconContainer={{ flex: 0.1 }}
            responsiveSizingOffset={23} */}
          {/* /> */}
          <CalendarStrip
            calendarAnimation={{ type: "sequence", duration: 10 }}
            daySelectionAnimation={{
              type: "background",
              duration: 200,
              borderWidth: 1,
              borderHighlightColor: "#3fadc4",
              highlightColor: "#3fadc4",
            }}
            showMonth={false}
            style={{ height: 100, paddingTop: 10, paddingBottom: 10 }}
            calendarHeaderStyle={{ color: "black" }}
            dateNumberStyle={{
              color: "black",
              fontSize: 20,
              fontFamily: "Nunito-Sans-Bold",
            }}
            dateNameStyle={{
              color: "black",
              fontSize: 12,
              fontFamily: "Nunito-Sans",
            }}
            startingDate={today}
            selectedDate={today}
            highlightDateNumberStyle={{
              color: "#fff",
              fontSize: 20,
              fontFamily: "Nunito-Sans-Bold",
            }}
            highlightDateNameStyle={{
              color: "#fff",
              fontSize: 12,
              fontFamily: "Nunito-Sans",
            }}
            // datesWhitelist={datesWhitelist}
            datesBlacklist={datesBlacklist}
            iconContainer={{ flex: 0.1 }}
          />
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
    // alignItems: "center",
    width: "100%",
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
    // alignItems: "center",
    // justifyContent: "center",
    width: "100%",
  },
});
