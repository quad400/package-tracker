import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  Ellipsis,
  Package as PackageIcon,
} from "lucide-react-native";
import { Colors } from "@/constants/colors";
import { Sizes } from "@/constants/sizes";
import Svg, { Line } from "react-native-svg";
import { Parcel } from "@/constants/images";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Details, DetailStatus } from "@/constants/data";
import { router } from "expo-router";

const Package = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: Sizes.md,
        paddingVertical: Sizes.sm,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
        onPress={()=>router.push("/(tabs)")}
          activeOpacity={0.6}
          style={{
            borderRadius: 25,
            height: 50,
            width: 50,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: Colors.grey1,
          }}
        >
          <ChevronLeft size={30} color={Colors.black} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: Sizes.xl,
          }}
        >
          Package Details
        </Text>

        <TouchableOpacity
          activeOpacity={0.6}
          style={{
            borderRadius: 25,
            height: 50,
            width: 50,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: Colors.grey1,
          }}
        >
          <Ellipsis size={24} color={Colors.black} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={DetailStatus}
        ListHeaderComponent={() => (
          <View
            style={{
              gap: 20,
              marginTop: 20,
            }}
          >
            <View
              style={{
                borderRadius: Sizes.md,
                borderWidth: 1,
                borderColor: "#EEEEEE",
                padding: Sizes.sm,
                gap: Sizes.md,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  width: "100%",
                  gap: 10,
                }}
              >
                <View
                  style={{
                    height: 50,
                    width: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 25,
                    backgroundColor: Colors.primary,
                  }}
                >
                  <PackageIcon
                    fill={Colors.white}
                    color={Colors.primary}
                    size={30}
                  />
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
                </View>
                <View
                  style={{
                    backgroundColor: "#2DAA9E30",
                    paddingVertical: 3,
                    paddingHorizontal: 6,
                    borderRadius: 16,
                  }}
                >
                  <Text
                    style={{
                      fontSize: Sizes.sm,
                      fontWeight: "600",
                      color: "#2DAA9E",
                    }}
                  >
                    In Transit
                  </Text>
                </View>
              </View>
              <Svg height="2" width="100%">
                <Line
                  x1="0"
                  y1="1"
                  x2="100%"
                  y2="1"
                  stroke={Colors.primary}
                  strokeWidth={StyleSheet.hairlineWidth}
                  strokeDasharray="10,5" // Dash length & spacing
                />
              </Svg>
              <FlatList
                data={Details}
                numColumns={2}
                columnWrapperStyle={{
                  justifyContent: "space-between",
                }}
                contentContainerStyle={{
                  gap: 15,
                }}
                keyExtractor={(item) => `${item.id}`}
                renderItem={({ item }) => (
                  <View
                    key={item.id}
                    style={{
                      width: "50%",
                      gap: 5,
                    }}
                  >
                    <Text
                      style={{
                        color: Colors.grey2,
                        fontSize: Sizes.sm,
                      }}
                    >
                      {item.type}:
                    </Text>
                    <Text
                      style={{
                        color: Colors.black,
                        fontSize: Sizes.md,
                      }}
                    >
                      {item.detail}
                    </Text>
                  </View>
                )}
              />
            </View>

            <View
              style={{
                backgroundColor: Colors.grey1,
                borderRadius: Sizes.lg,
                padding: Sizes.sm,
                width: "100%",
                flexDirection: "row",
              }}
            >
              <Image
                source={Parcel}
                resizeMode="contain"
                style={{
                  height: 100,
                  width: Sizes.width * 0.4,
                }}
              />

              <View
                style={{
                  flex: 1,
                  gap: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: Sizes.sm,
                  }}
                >
                  Stay updated with live tracking of your shipment's journey
                </Text>
                <TouchableOpacity
                  style={{
                    // width: "100%",
                    height: 50,
                    justifyContent: "center",
                    flexDirection: "row",
                    gap: 4,
                    borderRadius: Sizes.xl,
                    backgroundColor: Colors.primary,
                    alignItems: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="target"
                    size={24}
                    color="black"
                  />
                  <Text>Live Tracking</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Text
              style={{
                marginBottom: 20,
                fontSize: Sizes.lg,
              }}
            >
              Detail Status
            </Text>
          </View>
        )}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        ItemSeparatorComponent={() => (
          <View
            style={{
              marginBottom: 10,
            }}
          ></View>
        )}
        keyExtractor={(item) => item.type}
        renderItem={({ item, index }) => {
          const columnIndex = index % 2;
          return (
            <View
              key={item.id}
              style={{
                gap: 5,
                justifyContent:"flex-end",
                alignItems:columnIndex ?"flex-end":"flex-start"
              }}
            >
              <Text
                style={{

                  color: Colors.black,
                  fontSize: Sizes.md,
                }}
              >
                {item.type}
              </Text>
              <Text
                style={{
                  color: Colors.grey2,
                  fontSize: Sizes.sm,
                }}
              >
                {item.detail}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Package;

const styles = StyleSheet.create({});
