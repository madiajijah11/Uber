import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: 10,
    height: "100%",
    backgroundColor: "#fff",
  },
  inputText: {
    padding: 10,
    backgroundColor: "#eee",
    marginVertical: 10,
    marginLeft: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  iconContainer: {
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 50,
    marginRight: 10,
  },
  locationText: {},
  separator: {
    backgroundColor: "#eee",
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
    width: 7,
    height: 7,
    backgroundColor: "black",
    position: "absolute",
    top: 20,
    left: 15,
    borderRadius: 5,
  },
  line: {
    width: 1,
    height: 45,
    backgroundColor: "black",
    position: "absolute",
    top: 31,
    left: 18,
  },
  square: {
    width: 7,
    height: 7,
    backgroundColor: "black",
    position: "absolute",
    top: 80,
    left: 15,
  },
});

export default styles;
