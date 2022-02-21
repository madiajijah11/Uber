import React from "react";
import { View, Image, FlatList } from "react-native";

import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import styles from "./styles";
import cars from "../../assets/data/cars";

const HomeMap = () => {
  const getImage = (type: string) => {
    if (type === "UberX") {
      return require("../../assets/images/top-UberX.png");
    }
    if (type === "Comfort") {
      return require("../../assets/images/top-Comfort.png");
    }
    return require("../../assets/images/top-UberXL.png");
  };

  return (
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 28.453769,
          longitude: -16.257702,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
      >
        {cars.map((cars) => (
          <Marker
            key={cars.id}
            coordinate={{ latitude: cars.latitude, longitude: cars.longitude }}
          >
            <Image style={styles.marker} source={getImage(cars.type)} />
          </Marker>
        ))}
      </MapView>
  );
};

export default HomeMap;
