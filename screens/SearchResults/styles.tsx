import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
  homeMap: {
    height: Dimensions.get("window").height - 430,
  },
  uberTypes: {
    height: 400,
  },
});

export default styles;
