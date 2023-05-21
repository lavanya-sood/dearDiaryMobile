import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import TabBar from "./navigation/TabBar";
import { Provider } from "react-redux";

// import Todo from "./component/Todo";
import rootReducer from "./reducers/rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import { useFonts } from "expo-font";
// import './assets/fonts/Patrick_Hand/'
// const store = createStore(rootReducer, applyMiddleware(logger));
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// const Tab = createBottomTabNavigator();

// const CustomTabBarIcon = ({ children, onPress }) => (
//   <TouchableOpacity onPress={onPress} style={styles.mainIcon}>
//     <View style={styles.mainIconInterior}>{children}</View>
//   </TouchableOpacity>
// );

export default function App() {
  const [fontsLoaded] = useFonts({
    "Patrick-Hand": require("./assets/fonts/Patrick_Hand/PatrickHand-Regular.ttf"),
    "Nunito-Sans": require("./assets/fonts/Nunito_Sans/NunitoSans-Regular.ttf"),
    "Nunito-Sans-Bold": require("./assets/fonts/Nunito_Sans/NunitoSans-Bold.ttf"),
    Comfortaa: require("./assets/fonts/Comfortaa/Comfortaa-VariableFont_wght.ttf"),
  });

  return (
    // <LinearGradient style={styles.container} colors={["#f7d6e0", "#fcdfc7"]}>
    <Provider store={store}>
      <NavigationContainer>
        <TabBar />
      </NavigationContainer>
    </Provider>

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
    shadowColor: "#216773",
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
    shadowColor: "#216773",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.5,
    elevation: 5,
  },
  mainIconInterior: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#f08dbf",
  },
});
