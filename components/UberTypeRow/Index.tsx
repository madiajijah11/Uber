import React from "react";
import { View, Text, Image } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import styles from "./styles";

const UberTypeRow = () => {
    return (
        <View style={styles.container}>
            {/* Images */}
            <Image source={require("../../assets/images/UberX.jpeg")} style={styles.image} />
            <View style={styles.middleContainer}>
                <Text style={styles.type}>
                    UberX{" "}
                    <Ionicons name="people" size={16} color="black" />
                    3
                </Text>
                <Text style={styles.time}>
                    3:00 PM dropoff
                </Text>
            </View>
            <View style={styles.rightContainer}>
                <Ionicons name="pricetag" size={18} color="green" />
                <Text style={styles.price}>
                    $8.00
                </Text>
            </View>
        </View>
    );
}

export default UberTypeRow;