import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
  routeMap: {
    height: Dimensions.get("window").height - 350,
  },
  uberTypes: {
    height: 400,
  },
});

export default styles;
