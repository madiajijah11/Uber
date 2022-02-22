import React, { useEffect, useState } from "react";
import { View, TextInput, SafeAreaView } from "react-native";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import styles from "./styles";

const GOOGLE_PLACE_APIKEY = ""; //Google Place API Key

const DestinationSearch = () => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  useEffect(() => {
    console.warn("originPlace", originPlace);
    if (originPlace && destinationPlace) {
      console.warn("destinationPlace", destinationPlace);
    }
  }),
    [originPlace, destinationPlace];

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          styles={styles.inputText}
          placeholder="From"
          onPress={(data, details = null) => {
            setOriginPlace({ data, details });
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          fetchDetails={true}
          query={{
            key: GOOGLE_PLACE_APIKEY,
          }}
        />

        <GooglePlacesAutocomplete
          styles={styles.inputText}
          placeholder="Where to go?"
          onPress={(data, details = null) => {
            setDestinationPlace({ data, details });
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          fetchDetails={true}
          query={{
            key: GOOGLE_PLACE_APIKEY,
            language: "en",
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
