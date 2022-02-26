import React from "react";
import { View, Text, Pressable } from "react-native";

import { Feather } from "@expo/vector-icons";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const HomeSearch = () => {
    const navigation = useNavigation();
    const goToSearch = () => {
        navigation.navigate("Destination");
    }


    return (
      <View style={styles.container}>
        {/* Input Box */}
        <Pressable onPress={goToSearch} style={styles.inputBox}>
          <Text style={styles.inputText}>Where to?</Text>
          <View style={styles.timeContainer}>
            <Feather name="clock" size={16} color="#000" />
            <Text> Now</Text>
            <Feather name="chevron-down" size={16} color="#000" />
          </View>
        </Pressable>

        {/* Previous destination */}
        <View style={styles.row}>
          <View style={styles.iconContainer}>
            <Feather name="map-pin" size={16} color="#000" />
          </View>
          <Text style={styles.destinationText}>Dian Home</Text>
        </View>
        {/* Home destination */}
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