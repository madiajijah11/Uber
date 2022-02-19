import React from "react";
import { Pressable, View, Text } from "react-native";

import UberTypeRow from "../UberTypeRow/Index";

import TypesData from "../../assets/data/types";

import styles from "./styles";

const UberTypes = () => {
    const confirm = () => {
        console.warn("Confirm");
    }

    return (
        <View>
           {TypesData.map((type => <UberTypeRow type={type} />))}
            <Pressable style={styles.confirmPress} onPress={confirm}>
                <Text style={styles.Text}>Confirm Order</Text>    
            </Pressable>
        </View>
    );
}

export default UberTypes;