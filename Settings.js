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
  
  export default function Settings() {
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
              Settings
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
              Terms and Conditions
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
              Privacy Policy 
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
              Language
            </Text>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
  