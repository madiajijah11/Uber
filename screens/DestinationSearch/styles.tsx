import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: "100%",
    backgroundColor: "#eee",
  },
  inputText: {
    padding: 10,
    backgroundColor: "#fff",
    marginVertical: 5,
    marginLeft: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  iconContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 50,
    marginRight: 10,
  },
  locationText: {},
  separator: {
    backgroundColor: "red",
    height: 1,
  },
  listView: {
    position: "absolute",
    top: 105,
  },
  autoCompleteContainer: {
    position: "absolute",
    top: 0,
    left: 10,
    right: 10,
  },
  circle: {
    width: 5,
    height: 5,
    backgroundColor: "black",
    position: "absolute",
    top: 20,
    left: 15,
    borderRadius: 5,
  },
  line: {
    width: 1,
    height: 50,
    backgroundColor: "black",
    position: "absolute",
    top: 28,
    left: 17,
  },
  square: {
    width: 5,
    height: 5,
    backgroundColor: "black",
    position: "absolute",
    top: 80,
    left: 15,
  },
});

export default styles;
