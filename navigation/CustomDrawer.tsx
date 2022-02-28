import React from "react";
import { Pressable, Text, View } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

const CustomDrawer = (props : any) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ backgroundColor: "black", padding: 15 }}>

        {/* User row */}
        <View style={{
            flexDirection: "row",
            alignItems: "center",
        }}>
            <View style={{
                marginVertical: 15,
                backgroundColor: "white",
                width: 50,
                height: 50,
                borderRadius: 25,
                marginRight: 20,
            }} />
            <View>
                <Text style={{ color: "white", fontSize: 20, }}>Dian Sarah</Text>
                <Text style={{ color: "lightgrey", fontSize: 15 }}>5.00 *</Text>
            </View>
        </View>

        {/* Message row */}
        <View style={{
            borderBottomColor: "white",
            borderBottomWidth: 1,
            borderTopColor: "white",
            borderTopWidth: 1,
            paddingVertical: 5,
            marginVertical: 15,
        }}> 
          <Pressable
            onPress={() => {
              console.warn("Message");
            }}
          >
            <Text style={{ color: "white", paddingVertical: 5 }}>
              Message
            </Text>
          </Pressable>
        </View>

        {/* Do more */}
        <Pressable
          onPress={() => {
            console.warn("Do more with your account");
          }}
        >
          <Text style={{ color: "white", paddingVertical: 5 }}>
            Do more with your account
          </Text>
        </Pressable>

        {/* Make money */}
        <Pressable
          onPress={() => {
            console.warn("Make money driving");
          }}
        >
          <Text style={{ color: "white", paddingVertical: 5 }}>
            Make money driving
          </Text>
        </Pressable>

      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
