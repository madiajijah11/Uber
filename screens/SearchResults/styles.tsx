import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
  HomeMap: {
    height: Dimensions.get("window").height - 430,
  },
  UberTypes: {
    height: 400,
  },
});

export default styles;
