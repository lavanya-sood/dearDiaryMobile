import React from "react";
import { StyleSheet } from "react-native";
import MaskedView from "@react-native-community/masked-view";

export default MaskView = ({ element, children }) => (
  <MaskedView style={styles.container} maskElement={element}>
    {children}
  </MaskedView>
);

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    height: "100%",

    // alignItems: "center",
    zIndex: 2,
    // position: "absolute",
    top: -50,
    marginBottom: 100,
  },
});
