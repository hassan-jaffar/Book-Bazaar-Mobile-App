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
             Contact No:0304xxxxxx
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
            Email:bookbazar@gmail.com 
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
            Fax:2738239xxxx
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
            Address:Comsats Uni Lahore
            </Text>
          
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
  