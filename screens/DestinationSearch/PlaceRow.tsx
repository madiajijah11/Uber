import { Entypo } from "@expo/vector-icons";
import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const PlaceRow = ({ data }) => {
  return (
    <View style={styles.row}>
      <View style={styles.iconContainer}>
        {data.description === "Home" ? (
          <Entypo name="home" size={16} color="black" />
        ) : (
          <Entypo name="location-pin" size={16} color="black" />
        )}
      </View>
      <Text style={styles.locationText}>
        {data.description || data.vicinity}
      </Text>
    </View>
  );
};

export default PlaceRow;
