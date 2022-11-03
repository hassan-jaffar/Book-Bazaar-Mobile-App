import {
    Text,
    View,
    Dimensions,
    SafeAreaView,
    ScrollView,
    TextInput,
    Image,
  } from "react-native";
  import * as React from "react";
  import { Button } from "react-native-paper";
  
  var width = Dimensions.get("window").width;
  var height = Dimensions.get("window").height;
  
  export default function Notifications() {
    return (
      <SafeAreaView>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: width,
            height: height,
            backgroundColor: "#fff",
            paddingTop: 50,
          }}
        >
          <ScrollView>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                color: "#E1B107",
                padding: 10,
                width: 0.9 * width,
                textAlign: "center",
                marginTop: 20,
                borderBottomColor: "#E1B107", 
                borderBottomWidth: 2
              }}
            >
              Notifications
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "black",
                padding: 10,
                width: 0.9 * width,
                textAlign: "center",
                marginTop: 20,
                borderBottomColor: "#E1B107", 
                borderBottomWidth: 2
              }}
            >
              Your order is dispatched
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "black",
                padding: 10,
                width: 0.9 * width,
                textAlign: "center",
                marginTop: 20,
                borderBottomColor: "#E1B107", 
                borderBottomWidth: 2
              }}
            >
              Your order is confirmed 
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "black",
                padding: 10,
                width: 0.9 * width,
                textAlign: "center",
                marginTop: 20,
                borderBottomColor: "#E1B107", 
                borderBottomWidth: 2
              }}
            >
              Order cancelled
            </Text>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
  