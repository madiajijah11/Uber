import React from "react";
import { View } from "react-native";

import HomeMap from "../../components/HomeMap/Index";
import UberTypes from "../../components/UberTypes/Index";
import styles from "./styles";

const SearchResults = () => {
    return (
        <View style={styles.container}>
        <HomeMap />
        <UberTypes />
        </View>
    );
}

export default SearchResults;