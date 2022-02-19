import React from "react";
import { View } from "react-native";

import HomeMap from "../../components/HomeMap/Index";
import UberTypes from "../../components/UberTypes/Index";

const SearchResults = () => {
    return (
        <View>
        <HomeMap />
        <UberTypes />
        </View>
    );
}

export default SearchResults;