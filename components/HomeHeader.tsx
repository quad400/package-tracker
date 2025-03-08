import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ChevronDown } from "lucide-react-native";
import { Colors } from "@/constants/colors";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Avatar } from "@/constants/images";

const HomeHeader = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerWrapper}>
        <Image
          source={Avatar}
          style={{
            height: 46,
            width: 46,
            borderRadius: 23,
          }}
        />
        <View>
          <Text
            style={{
              fontSize: 20,
            }}
          >
            Lukmon Olabode
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 12,
                color: Colors.grey3,
              }}
            >
              Surulere Lagos
            </Text>
            <ChevronDown color="#000" />
          </View>
        </View>
      </View>
      <View style={styles.iconWrapper}>
        <View
          style={{
            position: "relative",
            backgroundColor: Colors.grey1,
          }}
        >
          <SimpleLineIcons name="bell" size={24} color="black" />
          <View
            style={{
              borderWidth: 1,
              borderColor: Colors.white,
              position: "absolute",
              top: 0,
              right: 2,
              width: 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: Colors.primary,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  iconWrapper: {
    padding: 12,
    borderRadius: 30,
    backgroundColor: Colors.grey1,
    // position: "relative",
  },
});
