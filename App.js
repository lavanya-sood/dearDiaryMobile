import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HomePage from "./src/HomePage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Goals from "./src/Goals";
import Thoughts from "./src/Thoughts";
import Profile from "./src/Profile";
import { NavigationContainer } from "@react-navigation/native";
import Create from "./src/Create";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import TabBar from "./navigation/TabBar";

const Tab = createBottomTabNavigator();

const CustomTabBarIcon = ({ children, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.mainIcon}>
    <View style={styles.mainIconInterior}>{children}</View>
  </TouchableOpacity>
);

export default function App() {
  return (
    // <LinearGradient style={styles.container} colors={["#f7d6e0", "#fcdfc7"]}>
    <NavigationContainer>
      <TabBar />
    </NavigationContainer>
    // </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  shadow: {
    shadowColor: "#f2b5d4",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.5,
    elevation: 5,
  },
  mainIcon: {
    top: -30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#f2b5d4",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.5,
    elevation: 5,
  },
  mainIconInterior: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#f08dbf",
  },
});
