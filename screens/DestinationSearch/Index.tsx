import React, { useState } from "react";
import { View, TextInput, SafeAreaView } from "react-native";

import styles from "./styles";

const DestinationSearch = () => {
    const [fromText , setFromText] = useState("");
    const [destinationText , setDestinationText] = useState("");

    return(
        <SafeAreaView>
            <View style={styles.container}>
            <TextInput style={styles.inputText} placeholder="From" value={fromText} onChangeText={setFromText} />
            <TextInput style={styles.inputText} placeholder="Where to go?" value={destinationText} onChangeText={setDestinationText} />
            </View>
        </SafeAreaView>
    );
}

export default DestinationSearch;