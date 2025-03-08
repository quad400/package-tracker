import React from "react";
import { View, TouchableOpacity, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Home,
  Package,
  MessageCircle,
  User,
  MessageSquareText,
} from "lucide-react-native"; // Icons
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Colors } from "@/constants/colors";
import { Sizes } from "@/constants/sizes";

const TabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const insets = useSafeAreaInsets();
  const icons = [Home, Package, MessageSquareText, User];

  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        left: 0,
        right: 0,
        bottom: Platform.OS === "ios" ? insets.bottom - 20 : insets.bottom + 20,
      }}
    >
      <View
        style={{
          width: Sizes.width * 0.7,
          flexDirection: "row",
          backgroundColor: "white",
          borderRadius: 50,
          shadowColor: Colors.grey3,
          shadowOpacity: 0.1,
          shadowRadius: 10,
          elevation: 5,
          paddingVertical: 5,
          // paddingHorizontal: 20,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          const Icon = icons[index];

          return (
            <TouchableOpacity
              key={route.key}
              onPress={() => navigation.navigate(route.name)}
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: isFocused ? "#f7931e" : "transparent",
                  paddingVertical: 16,
                  paddingHorizontal: 20,
                  borderRadius: 30,
                }}
              >
                <Icon color={isFocused ? Colors.white : "gray"} size={24} />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default TabBar;
