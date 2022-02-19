import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./styles";

const UberTypeRow = () => {
    return (
        <View>
            {/* Images */}
            <Image source={require("../../assets/images/UberX.jpeg")} style={styles.image} />
            <View style={styles.middleContainer}></View>
            <View style={styles.rightContainer}></View>
        </View>
    );
}

export default UberTypeRow;