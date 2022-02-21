import React from "react";
import { View, Image } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

import styles from "./styles";

const GOOGLE_MAPS_APIKEY = "";

const RouteMap = () => {
  const origin = { latitude: 28.453769, longitude: -16.257702 };
  const destination = { latitude: 28.458004, longitude: -16.257251 };

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
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={5}
        strokeColor="black"
      />
      <Marker coordinate={origin} title="Origin" />
      <Marker coordinate={destination} title="Destination" />
    </MapView>
  );
};

export default RouteMap;
