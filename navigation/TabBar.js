import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HomePage from "../src/HomePage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Goals from "../src/Goals";
import Thoughts from "../src/Thoughts";
import Profile from "../src/Profile";
import { NavigationContainer } from "@react-navigation/native";
import Create from "../src/Create";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const CustomTabBarIcon = ({ children, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.mainIcon}>
    <View style={styles.mainIconInterior}>{children}</View>
  </TouchableOpacity>
);

export default function TabBar() {
  return (
    // <LinearGradient style={styles.container} colors={["#f7d6e0", "#fcdfc7"]}>

    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#f08dbf",
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 30,
          left: 20,
          right: 20,
          elevation: 0,
          borderRadius: 20,
          // height: 0,
          // justifyContent: 'center',
          backgroundColor: "white",
          paddingBottom: 0,
          ...styles.shadow,
        },
      }}
      tabBarOptions={{
        showLabel: false,
        showIcon: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarLabel: "Today",
          tabBarIcon: ({ focused, color, size }) => (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <MaterialCommunityIcons
                name="calendar-today"
                color={color}
                size={size}
              />
              <Text style={{ color: color, fontSize: 10 }}> Today </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Goals"
        component={Goals}
        options={{
          tabBarLabel: "Goals",
          tabBarIcon: ({ focused, color, size }) => (
            // <View>
            //   <Text> Hi </Text>
            // </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Feather name="target" color={color} size={size} />
              <Text style={{ color: color, fontSize: 10 }}> Goals </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Create"
        component={Create}
        options={{
          tabBarLabel: "null",
          tabBarIcon: ({ focused, color, size }) => (
            // <View>
            //   <Text> Hi </Text>
            // </View>

            <Ionicons name="add" color={"#fff"} size={50} />
          ),
          tabBarButton: (props) => <CustomTabBarIcon {...props} />,
        }}
      />
      <Tab.Screen
        name="Thoughts"
        component={Thoughts}
        options={{
          tabBarLabel: "Thoughts",
          tabBarIcon: ({ focused, color, size }) => (
            // <View>
            //   <Text> Hi </Text>
            // </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <MaterialCommunityIcons
                name="thought-bubble"
                color={color}
                size={size}
              />
              <Text style={{ color: color, fontSize: 10 }}> Thoughts </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused, color, size }) => (
            // <View>
            //   <Text> Hi </Text>
            // </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <FontAwesome name="user" color={color} size={size} />
              <Text style={{ color: color, fontSize: 10 }}> Profile </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>

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
