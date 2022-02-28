import React, { useEffect, useState } from "react";
import { View, TextInput, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import styles from "./styles";
import PlaceRow from "./PlaceRow";

const GOOGLE_PLACE_APIKEY = ""; //Google Place API Key

const homePlace = {
  description: "Home",
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
  description: "Work",
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};

const DestinationSearch = () => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  const navigation = useNavigation();

  useEffect(() => {
    if (originPlace && destinationPlace) {
      navigation.navigate("SearchResults", {
        //date sent when we navigate
        originPlace,
        destinationPlace,
      });
    }
  }),
    [originPlace, destinationPlace];

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="Where from?"
          onPress={(data, details = null) => {
            setOriginPlace({ data, details });
          }}
          suppressDefaultStyles
          styles={{
            textInput: styles.inputText,
            container: styles.autoCompleteContainer,
            listView: styles.listView,
            separator: styles.separator,
          }}
          enablePoweredByContainer={false}
          fetchDetails={true}
          currentLocation={true}
          currentLocationLabel="Current location"
          query={{
            key: GOOGLE_PLACE_APIKEY,
          }}
          renderRow={(data) => <PlaceRow data={data} />}
          renderDescription={(data) => data.description || data.vicinity}
          predefinedPlaces={[homePlace, workPlace]}
        />

        <GooglePlacesAutocomplete
          placeholder="Where to go?"
          onPress={(data, details = null) => {
            setDestinationPlace({ data, details });
          }}
          suppressDefaultStyles
          styles={{
            textInput: styles.inputText,
            container: {
              ...styles.autoCompleteContainer,
              top: originPlace ? 105 : 55,
            },
            listView: styles.listView,
            separator: styles.separator,
          }}
          enablePoweredByContainer={false}
          fetchDetails={true}
          query={{
            key: GOOGLE_PLACE_APIKEY,
            language: "en",
          }}
          renderRow={(data) => <PlaceRow data={data} />}
          renderDescription={(data) => data.description || data.vicinity}
          predefinedPlaces={[homePlace, workPlace]}
        />

        {/* Circle near Origin input */}
        <View style={styles.circle}></View>

        {/* Line between dots */}
        <View style={styles.line}></View>

        {/* Square near Destination input */}
        <View style={styles.square}></View>
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
