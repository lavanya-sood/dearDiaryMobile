import { LinearGradient } from "expo-linear-gradient";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CalendarStrip from "react-native-calendar-strip";
import moment from "moment";
import { useEffect, useState } from "react";
import Thought from "./Thought";
import MaskView from "./maskView";
import MaskedElement from "./maskElement";

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

  const [selectedDate, setSelectedDate] = useState(today);
  const [todayThoughts, setTodayThoughts] = useState([]);
  // console.log("DATA");
  // console.log(data);

  useEffect(() => {
    const select = selectedDate.startOf("day").format("LL");
    // console.log(selectedDate.startOf("day").format("LL"));
    // console.log(data);
    // setTodayThoughts(data.filter)
    const todayT = [];
    data.thoughts.map((d) => {
      // console.log(d);
      const formattedDate = d.date.startOf("day").format("LL");
      if (formattedDate === select) {
        todayT.push(d);
      }
    });
    console.log(todayT);
    setTodayThoughts(todayT);
  }, [selectedDate, data]);
  return (
    <LinearGradient style={styles.container} colors={["#b2f7ef", "#eff6f6"]}>
      {/* <Text>Home Page</Text> */}

      <View style={styles.parent}>
        <View style={styles.child}>
          {selectedDate.startOf("day").format("LL") ===
          today.startOf("day").format("LL") ? (
            <Text style={styles.heading}>Today</Text>
          ) : (
            <Text style={styles.heading}>On Date</Text>
          )}
          <Text style={styles.subheading}>
            {selectedDate.format("dddd, MMMM D")}
          </Text>
          <CalendarStrip
            scrollable={true}
            scrollerPaging={true}
            calendarAnimation={{ type: "sequence", duration: 10 }}
            daySelectionAnimation={{
              type: "background",
              duration: 200,
              borderWidth: 1,
              borderHighlightColor: "#3fadc4",
              highlightColor: "#3fadc4",
            }}
            showMonth={false}
            style={{ height: 100, paddingTop: 5, paddingBottom: 10 }}
            calendarHeaderStyle={{ color: "black" }}
            dateNumberStyle={{
              color: "black",
              fontSize: 15,
              fontFamily: "Nunito-Sans-Bold",
            }}
            dateNameStyle={{
              color: "black",
              fontSize: 10,
              fontFamily: "Nunito-Sans",
            }}
            onDateSelected={(date) => setSelectedDate(date)}
            startingDate={selectedDate}
            selectedDate={selectedDate}
            highlightDateNumberStyle={{
              color: "#fff",
              fontSize: 15,
              fontFamily: "Nunito-Sans-Bold",
            }}
            highlightDateNameStyle={{
              color: "#fff",
              fontSize: 10,
              fontFamily: "Nunito-Sans",
            }}
            // highlightDateContainerStyle={{ padding: 10 }}
            // datesWhitelist={datesWhitelist}
            datesBlacklist={datesBlacklist}
            iconContainer={{ flex: 0.1 }}
          />
        </View>
      </View>
      {/* <ScrollView
        style={styles.pageCards}
        contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}
      > */}
      <MaskView element={<MaskedElement />}>
        <FlatList
          data={todayThoughts}
          // style={styles.pageCards}
          renderItem={({ item }) => (
            <Thought
              title={item.thought}
              emotion={item.emotion}
              time={item.date}
            />
            // <View>
            //   <Text>{item.thought}</Text>
            // </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </MaskView>

      {/* <View style={styles.thoughtBox}>
          <Text>How has your day been?</Text>
          <View>
            <Text>You haven't entered any thoughts yet</Text>
          </View>
        </View> */}
      {/* <View style={styles.thoughtBox}>
          <Text>Text2</Text>
        </View> */}
      {/* </ScrollView> */}
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
    // alignItems: "center",
    backgroundColor: "#ffffff",
    zIndex: 1,
  },
  child: {
    marginTop: 70,
    flex: 1,
    transform: [{ scaleX: 0.5 }],

    backgroundColor: "#ffffff",
    // alignItems: "center",
    // justifyContent: "center",
    width: "100%",
  },
  pageCards: {
    // alignItems: "center",
    zIndex: 2,
    // position: "absolute",
    top: -50,
  },
  thoughtBox: {
    backgroundColor: "#f7fbff",
    width: "80%",
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
  },
  // goalsBox: {
  //   backgroundColor: "pink",
  //   width: "80%",
  //   padding: 20,
  //   borderRadius: 15,
  //   margin: 10,
  // },
  heading: {
    fontSize: 25,
    fontFamily: "Nunito-Sans-Bold",
    marginLeft: 20,
    textTransform: "uppercase",
    // fontWeight: "bold",
  },
  subheading: {
    fontSize: 17,
    fontFamily: "Nunito-Sans-Bold",
    marginLeft: 20,
    textTransform: "uppercase",
  },
});
