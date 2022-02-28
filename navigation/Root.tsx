import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeNavigator from "./Home";
import { View, Text } from "react-native";
import CustomDrawer from "./CustomDrawer";

// const DummyScreen = (props) => {
//   <View style={{flex: 1, justifyContent: "center", alignItems: "center" }}>
//     <Text>{props.name}</Text>
//   </View>;
// };

function YourTripsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Your Trip</Text>
    </View>
  );
}

function HelpScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Help</Text>
    </View>
  );
}

function WalletScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Wallet</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings</Text>
    </View>
  );
}


const Drawer = createDrawerNavigator();

const RootNavigator = (props: any) => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={
          (props: any) => (<CustomDrawer {...props} />)
      }>
        <Drawer.Screen name="Home" component={HomeNavigator} />
        <Drawer.Screen name="Your Trips" component={YourTripsScreen} />
        {/* <Drawer.Screen name="Your Trips">
          {() => <DummyScreen name={"Your Trips"} />}
        </Drawer.Screen> */}

        <Drawer.Screen name="Help" component={HelpScreen} />
        {/* <Drawer.Screen name="Help">
          {() => <DummyScreen name={"Help"} />}
        </Drawer.Screen> */}

        <Drawer.Screen name="Wallet" component={WalletScreen} />
        {/* <Drawer.Screen name="Wallet">
          {() => <DummyScreen name={"Wallet"} />}
        </Drawer.Screen> */}

        <Drawer.Screen name="Settings" component={SettingsScreen} />
        {/* <Drawer.Screen name="Settings">
          {() => <DummyScreen name={"Settings"} />}
        </Drawer.Screen> */}

      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
