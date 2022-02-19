import React from "react";
import { Text, View, TextInput, SafeAreaView } from "react-native";

import UberTypeRow from "../UberTypeRow/Index";

import TypesData from "../../assets/data/types";

import styles from "./styles";

const UberTypes = () => {
    return (
        <View>
           {TypesData.map((type => <UberTypeRow />))}
        </View>
    );
}

export default UberTypes;