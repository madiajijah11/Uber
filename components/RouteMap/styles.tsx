import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 300,
    //height: Dimensions.get('window').height/3,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    //width: Dimensions.get('window').width,
    //height: Dimensions.get('window').height/3,
    width: "100%",
    height: "100%",
  },
  marker: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
});

export default styles;
