import React from "react";
import { View } from "react-native";
import { useRoute } from "@react-navigation/native";
import HomeMap from "../../components/HomeMap/Index";
import UberTypes from "../../components/UberTypes/Index";
import styles from "./styles";

const SearchResults = () => {
  const route = useRoute();
  console.log(route.params);
  return (
    <View style={styles.container}>
      <View style={styles.homeMap}>
        <HomeMap />
      </View>
      <View style={styles.uberTypes}>
        <UberTypes />
      </View>
    </View>
  );
};

export default SearchResults;
