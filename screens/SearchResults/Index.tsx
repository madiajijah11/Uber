import React from "react";
import { View } from "react-native";

import HomeMap from "../../components/HomeMap/Index";
import UberTypes from "../../components/UberTypes/Index";
import styles from "./styles";

const SearchResults = () => {
  return (
    <View style={styles.container}>
      <View style={styles.HomeMap}>
        <HomeMap />
      </View>
      <View style={styles.UberTypes}>
        <UberTypes />
      </View>
    </View>
  );
};

export default SearchResults;
