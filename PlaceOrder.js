import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import { Col, Row, Grid } from "react-native-paper-grid";
import * as React from "react";
import RadioButtonRN from "radio-buttons-react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import productService from "./Services/services/ProductsServices";

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

export default function PlaceOrder({route}) {
  const navigation = useNavigation();

  const move = () => {
    productService.addProduct({orderItems:[{  bookName: route.params.val.bookName,
      qty: 1,
      image: route.params.val.image,
      price: route.params.val.price,
      productId: route.params.val._id,
      storeOwner: route.params.val.user}],   shippingAddress: {
        address: address,
        city: city,
        postalCode: postalCode,
        country: country,
      },paymentMethod:"Cash On delivery"}).then((val)=>{
    navigation.navigate("Home");
    }).catch((e)=>{
      Alert.alert(val.errors[0].msg);
    })

  };
  const [name,setName]=React.useState("");
  const [number,setNumber]=React.useState("");
  const [address,setAddress]=React.useState("");
  const [city,setCity]=React.useState("");
  const [postalCode,setPostalCode]=React.useState("");
  const [country,setCountry]=React.useState("");
  return (
    <SafeAreaView>
    <ScrollView>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: width,
          height: height * 1.1,
          backgroundColor: "#fff",
        }}
      >
        
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
            onChangeText={(e)=>setName(e)}
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
            onChangeText={(e)=>setNumber(e)}
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
            onChangeText={(e)=>setAddress(e)}
          ></TextInput>
          <TextInput
            placeholder="Your City"
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
            onChangeText={(e)=>setCity(e)}
          ></TextInput>
          <TextInput
            placeholder="Postal Code"
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
            onChangeText={(e)=>setPostalCode(e)}
          ></TextInput>
          <TextInput
            placeholder="Your Country"
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
            onChangeText={(e)=>setCountry(e)}
          ></TextInput>

          <Button
            style={{
              borderColor: "#E1B107",
              borderRadius: 25,
              borderWidth: 3,
              padding: 10,
              width: 0.4 * width,
              alignSelf: "center",
              marginTop: 30
            }}
            onPress={move}
          >
            Place Order
          </Button>
      </View>
      </ScrollView>
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
