import { View, Text, Platform, StyleSheet } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "@/constants/colors";
import { BlurView } from "expo-blur";
import TabBar from "@/components/TabBar";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                backgroundColor: focused ? Colors.primary : Colors.white,
                height: 50,
                width: 60,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 25,
              }}
            >
              <AntDesign
                name="home"
                size={24}
                color={focused ? Colors.white : Colors.grey2}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="package"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                backgroundColor: focused ? Colors.primary : Colors.white,
                height: 50,
                width: 60,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 25,
              }}
            >
              <AntDesign
                name="home"
                size={24}
                color={focused ? Colors.white : Colors.grey2}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="message"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                backgroundColor: focused ? Colors.primary : Colors.white,
                height: 50,
                width: 60,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 25,
              }}
            >
              <AntDesign
                name="home"
                size={24}
                color={focused ? Colors.white : Colors.grey2}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                backgroundColor: focused ? Colors.primary : Colors.white,
                height: 50,
                width: 60,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 25,
              }}
            >
              <AntDesign
                name="home"
                size={24}
                color={focused ? Colors.white : Colors.grey2}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
