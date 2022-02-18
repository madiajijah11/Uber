import React from "react";
import { View, Text } from "react-native";

import { Feather } from "@expo/vector-icons";
import styles from "./styles";

const HomeSearch = () => {
    return (
        <View>
            {/* Input Box */}
            <View style={styles.inputBox}>
                <Text style={styles.inputText}>Where to?</Text>
                <View style={styles.timeContainer}>
                    <Feather name="clock" size={20} color="#000" />
                    <Text> Now</Text>
                    <Feather name="chevron-down" size={20} color="#000" />
                </View>
            </View>

            {/* Previous destination */}

            {/* Home destination */}
            
        </View>
    );
}

export default HomeSearch;