import React from "react";
import { StyleSheet, View, TextInput, SafeAreaView } from "react-native";

import styles from "./styles";

const DestinationSearch = () => {
    return(
        <SafeAreaView>
            <View style={styles.container}>
            <TextInput style={styles.inputText} placeholder="From" />
            <TextInput style={styles.inputText} placeholder="Where to go?" />
            </View>
        </SafeAreaView>
    );
}

export default DestinationSearch;