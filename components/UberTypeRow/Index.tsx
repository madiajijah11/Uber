import React from "react";
import { View, Text, Image } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import styles from "./styles";

const UberTypeRow = (props) => {
    const { type } = props;

    const getImage = () => {
        if (type.type === "UberX") {
            return require("../../assets/images/UberX.jpeg");
        }
        if (type.type === "Comfort") {
             return require("../../assets/images/Comfort.jpeg");
        }
            return require("../../assets/images/UberXL.jpeg");
        }

    return (
        <View style={styles.container}>
            {/* Images */}
            <Image source={getImage()} style={styles.image} />
            <View style={styles.middleContainer}>
                <Text style={styles.type}>
                    {type.type}{" "}
                    <Ionicons name="people" size={16} color="black" />
                    3
                </Text>
                <Text style={styles.time}>
                    {type.duration} dropoff
                </Text>
            </View>
            <View style={styles.rightContainer}>
                <Ionicons name="pricetag" size={18} color="green" />
                <Text style={styles.price}>
                    {type.price}
                </Text>
            </View>
        </View>
    );
}

export default UberTypeRow;