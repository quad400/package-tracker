import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/colors";
import { Avatar } from "@/constants/images";
import {
  ArrowRight,
  Box,
  ChevronDown,
  ChevronRight,
  MapPin,
  ScanLine,
  Search,
  SlidersHorizontal,
  Truck,
} from "lucide-react-native";
import { Sizes } from "@/constants/sizes";
import { USDollar } from "@/utils";
import TrackingCard from "@/components/TrackingCard";
import HomeHeader from "@/components/HomeHeader";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const tabs = ["All", "Completed", "In Delivery", "Pending"];

const Home = () => {
  const [selectedTab, setSelectedTab] = useState("All");
  const formattedAmount = USDollar(40000);
  const [mainPart, decimalPart] = formattedAmount.split(".");

  const { bottom, top } = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: Sizes.md,
        paddingVertical: Sizes.sm,
        gap:20
      }}
    >
      <HomeHeader />
      <View
        style={{
          borderRadius: Sizes.md,
          borderWidth: 1,
          borderColor: "#EEEEEE",
          padding: Sizes.sm,
          gap: Sizes.md,
        }}
      >
        <Text
          style={{
            color: Colors.grey3,
          }}
        >
          Your Balance
        </Text>
        <View
          style={{
            flexDirection: "row",
            // flex: 1,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontWeight: "400",
              fontSize: 36,
            }}
          >
            {mainPart}
            <Text
              style={{
                fontWeight: "400",
                color: Colors.grey2,
                fontSize: 36,
              }}
            >
              .{decimalPart}
            </Text>
          </Text>
          <View>
            <View
              style={{
                flexDirection: "row",
                gap: 2,
                padding: 4,
                borderRadius: 10,
                height: "auto",
                backgroundColor: "#E9762B20",
              }}
            >
              <Text
                style={{
                  color: Colors.primary,
                  fontSize: 12,
                  fontWeight: "500",
                }}
              >
                Top Up
              </Text>
              <ChevronRight color={Colors.primary} size={16} />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            width: "100%",
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
              paddingVertical: 15,
              width: "49%",
              borderRadius: 30,
              backgroundColor: "#E9762B20",
            }}
          >
            <ScanLine size={18} color={Colors.primary} />
            <Text style={{}}>New Track</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
              paddingVertical: 15,
              width: "49%",
              borderRadius: 30,
              backgroundColor: "#E9762B20",
            }}
          >
            <Box size={20} color={Colors.primary} />
            <Text style={{}}>Order Us</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 24,
          }}
        >
          Current Tracking
        </Text>

        <TouchableOpacity
          activeOpacity={0.4}
          style={{
            paddingVertical: 10,
            paddingLeft: 10,
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color: Colors.primary,
            }}
          >
            See All
          </Text>
          <ChevronRight color={Colors.primary} size={18} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: Colors.grey1,
          // flex: 1,
          gap: 10,
          padding: Sizes.md,
          borderRadius: Sizes.xl,
        }}
      >
        <View
          style={{
            backgroundColor: Colors.white,
            borderRadius: 30,
            paddingHorizontal: 4,
            elevation: 2,

            shadowOffset: {
              height: 1,
              width: 1,
            },
            shadowColor: Colors.grey2,
            shadowRadius: Sizes.md,
            shadowOpacity: 0.1,
            paddingVertical: 5,
            gap: 6,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              flex: 1,
              paddingHorizontal: Sizes.md,
              alignItems: "center",
              gap: 6,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Search color={Colors.grey3} />
            <TextInput
              selectionColor={Colors.primary}
              placeholder="Search..."
              style={{
                flex: 1,
              }}
            />
          </View>
          <View
            style={{
              padding: 12,
              borderRadius: 50,
              backgroundColor: Colors.primary,
            }}
          >
            <SlidersHorizontal color={Colors.white} />
          </View>
        </View>

        <View>
          <FlatList
            data={[1, 2]}
            ListHeaderComponent={() => (
              <ScrollView
                horizontal
                contentContainerStyle={{
                  marginBottom: 20,
                  height: 30,
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                {tabs.map((tab) => (
                  <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => setSelectedTab(tab)}
                    key={tab}
                    style={{
                      paddingVertical: 5,
                      paddingHorizontal: Sizes.sm,
                      backgroundColor:
                        tab === selectedTab ? Colors.primary : "transparent",
                      borderWidth:
                        tab === selectedTab ? 0 : StyleSheet.hairlineWidth,
                      borderColor: Colors.grey2,
                      borderRadius: 20,
                    }}
                  >
                    <Text
                      style={{
                        color:
                          tab === selectedTab ? Colors.white : Colors.grey2,
                        fontSize: Sizes.sm,
                      }}
                    >
                      {tab}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            )}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  marginVertical: 14,
                  backgroundColor: "#A9A9A980",
                  height: StyleSheet.hairlineWidth,
                  width: "100%",
                }}
              />
            )}
            contentContainerStyle={{
              height: "100%",
            }}
            renderItem={({ index }) => <TrackingCard key={index} />}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
