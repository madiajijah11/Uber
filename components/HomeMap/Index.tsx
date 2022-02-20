import React from "react";
import { View, Text, Dimensions } from "react-native";

import MapView, {Marker} from "react-native-maps";
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
              }}>
            <Marker coordinate={{ latitude : 22.315713 , longitude : 114.172806 }}
                image={require("../../assets/images/top-UberX.png")}/>
            </MapView>
        </View>
    );
}

export default HomeMap;