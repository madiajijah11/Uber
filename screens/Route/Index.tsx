import React from "react";
import { View, Text } from "react-native";

import UberTypes from "../../components/UberTypes/Index";
import RouteMap from "../../components/RouteMap/Index";
import styles from "./styles";

const Route = () => {
  return (
    <View style={styles.container}>
      <View style={styles.RouteMap}>
        <RouteMap />
      </View>
      <View style={styles.UberTypes}>
        <UberTypes />
      </View>
    </View>
  );
};

export default Route;
