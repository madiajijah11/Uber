import React from "react";
import { View, Text, Dimensions } from "react-native";

import MapView from "react-native-maps";
import styles from "./styles";

const HomeMap = () => {
    return (
        <View style={styles.container}>
            <MapView style={styles.map} />
        </View>
    );
}

export default HomeMap;