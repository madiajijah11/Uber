import React from "react";
import { View, Text } from "react-native";

import { Feather } from "@expo/vector-icons";
import styles from "./styles";

const HomeSearch = () => {
    return (
        <View style={styles.container}>
            {/* Input Box */}
            <View style={styles.inputBox}>
                <Text style={styles.inputText}>Where to?</Text>
                <View style={styles.timeContainer}>
                    <Feather name="clock" size={16} color="#000" />
                    <Text> Now</Text>
                    <Feather name="chevron-down" size={16} color="#000" />
                </View>
            </View>
            
            {/* Previous destination */}
            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <Feather name="map-pin" size={16} color="#000" />
                </View>
                <Text style={styles.destinationText}>Sarah Home</Text>
            </View>
            {/* Home destination */}
             <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <Feather name="home" size={16} color="#000" />
                </View>
                <Text style={styles.destinationText}>Sarah Home</Text>
            </View>

            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <Feather name="home" size={16} color="#000" />
                </View>
                <Text style={styles.destinationText}>Sarah Home</Text>
            </View>
        </View>
    );
}

export default HomeSearch;