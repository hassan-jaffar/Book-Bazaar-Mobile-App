import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  ScrollView,
  TextInput,
} from "react-native";
import { Col, Row, Grid } from "react-native-paper-grid";
import * as React from "react";
import RadioButtonRN from "radio-buttons-react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    label: "Cash on Delivery",
  },
  {
    label: "Credit Card",
  },
];

var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

export default function PlaceOrder() {
  const navigation = useNavigation();

  const move = () => {
    navigation.navigate("MyOrders");
  };
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
              fontSize: 30,
              fontWeight: "bold",
              borderColor: "#E1B107",
              borderRadius: 25,
              borderWidth: 3,
              padding: 10,
              width: 0.8 * width,
              textAlign: "center",
              alignSelf: "center",
            }}
          >
            Shipping Details
          </Text>
          <TextInput
            placeholder="Your Name"
            style={{
              marginTop: 40,
              width: 0.9 * width,
              borderRadius: 30,
              borderColor: "#E1B107",
              borderWidth: 2,
              padding: 10,
              paddingLeft: 30,
              backgroundColor: "white",
              alignSelf: "center"
            }}
          ></TextInput>
          <TextInput
            placeholder="Contact Number"
            style={{
              marginTop: 40,
              width: 0.9 * width,
              borderRadius: 30,
              borderColor: "#E1B107",
              borderWidth: 2,
              padding: 10,
              paddingLeft: 30,
              backgroundColor: "white",
              alignSelf: "center"
            }}
          ></TextInput>
          <TextInput
            placeholder="Shipping Address"
            style={{
              marginTop: 40,
              width: 0.9 * width,
              borderRadius: 30,
              borderColor: "#E1B107",
              borderWidth: 2,
              padding: 10,
              paddingLeft: 30,
              backgroundColor: "white",
              alignSelf: "center"
            }}
          ></TextInput>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              borderColor: "#E1B107",
              borderRadius: 25,
              borderWidth: 3,
              padding: 10,
              width: 0.8 * width,
              textAlign: "center",
              marginTop: 50,
              alignSelf: "center"
            }}
          >
            Select Payment Method
          </Text>
          <View
            style={{
              margin: 10,
              height: 150,
              marginTop: 20,
              marginBottom: 20,
              backgroundColor: "#E1B107",
              width: 0.9 * width,
              borderBottomLeftRadius: 30,
              borderTopRightRadius: 30,
              justifyContent: "center",
            }}
          >
            <RadioButtonRN
              box={false}
              data={data}
              selectedBtn={(e) => console.log(e)}
              style={{ margin: 50 }}
            />
          </View>
          <Button
            style={{
              borderColor: "#E1B107",
              borderRadius: 25,
              borderWidth: 3,
              padding: 10,
              width: 0.4 * width,
              alignSelf: "center",
            }}
            onPress={move}
          >
            Place Order
          </Button>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginBottom: 50,
    backgroundColor: "#E1B107",
    width: 0.9 * width,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
