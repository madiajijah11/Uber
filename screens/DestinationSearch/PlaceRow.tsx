import { Entypo } from "@expo/vector-icons";
import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const PlaceRow = ({ data }) => {
  return (
    <View style={styles.row}>
      <View style={styles.iconContainer}>
        <Entypo name="location-pin" size={24} color="black" />
      </View>
      <Text style={styles.locationText}>{data.description}</Text>
    </View>
  );
};

export default PlaceRow;
