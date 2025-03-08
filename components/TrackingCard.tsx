import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { ArrowRight, ChevronRight, MapPin, Truck } from "lucide-react-native";
import { Colors } from "@/constants/colors";
import { Sizes } from "@/constants/sizes";
import { router } from "expo-router";

const TrackingCard = () => {
  return (
   
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: Sizes.lg,
        }}
      >
        <View
          style={{
            padding: 10,
            backgroundColor: Colors.white,
            borderRadius: 30,
          }}
        >
          <Truck fill={Colors.grey2} color={Colors.grey3} />
        </View>
        <View
          style={{
            flex: 1,
          }}
        >
          <Text
            style={{
              fontSize: Sizes.sm,
              color: Colors.grey3,
            }}
          >
            ID Number
          </Text>
          <Text
            style={{
              fontSize: Sizes.xl,
            }}
          >
            F - ZR678W45
          </Text>
          <View
            style={{
              flexDirection: "row",
              gap: 4,
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 4,
                alignItems: "center",
              }}
            >
              <MapPin color={Colors.black} size={14} />
              <Text
                style={{
                  fontSize: Sizes.sm,
                  color: Colors.grey3,
                }}
              >
                Ojuelegba
              </Text>
            </View>
            <ArrowRight color={Colors.black} size={16} />
            <View
              style={{
                flexDirection: "row",
                gap: 4,
                alignItems: "center",
              }}
            >
              <MapPin color={Colors.black} size={14} />
              <Text
                style={{
                  fontSize: Sizes.sm,
                  color: Colors.grey3,
                }}
              >
                Barracks
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
        activeOpacity={0.6}
        onPress={()=>router.push("/(tabs)/package")}
          style={{
            padding: 10,
            backgroundColor: Colors.white,
            borderRadius: 30,
          }}
        >
          <ChevronRight size={24} color={Colors.grey3} />
        </TouchableOpacity>
      </View>
      
  );
};

export default TrackingCard;
