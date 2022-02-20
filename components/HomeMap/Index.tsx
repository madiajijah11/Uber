import React from "react";
import { View, Text, Dimensions } from "react-native";

import MapView from "react-native-maps";
import styles from "./styles";

const HomeMap = () => {
    return (
        <View style={styles.container}>
            <MapView 
            style={styles.map}
            initialRegion={{
                latitude: 22.315713,
                longitude: 114.172806,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            />
        </View>
    );
}

export default HomeMap;