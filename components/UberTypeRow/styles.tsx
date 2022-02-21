import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  middleContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  rightContainer: {
    width: 100,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  type: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 3,
  },
  time: {
    color: "grey",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 5,
  },
});

export default styles;
