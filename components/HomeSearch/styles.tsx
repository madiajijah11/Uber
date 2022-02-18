import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    inputBox: {
        backgroundColor: "#d9d9d9",
        margin: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
    },
    inputText: {
        fontSize: 18,
        fontWeight: "600",
        color: "#000",
    },
    timeContainer: {
        borderRadius: 20,
        flexDirection: "row",
        width: 80,
        justifyContent: "space-between",
        backgroundColor: "white",
        padding: 5,
    },
});

export default styles;