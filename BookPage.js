import {
  Text,
  View,
  Dimensions,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import { Col, Row, Grid } from "react-native-paper-grid";
import * as React from "react";
import { Button, Card, Title } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function BookPage({route}) {
  var width = Dimensions.get("window").width;
  var height = Dimensions.get("window").height;

  const navigation = useNavigation();

  const move = () => {
    navigation.navigate("PlaceOrder",{val:route.params.val});
  };
  const moves = () => {
    navigation.navigate("Cart");
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            height: height,
            width: width,
            backgroundColor: "#fff",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              borderColor: "#E1B107",
              borderRadius: 25,
              borderWidth: 3,
              padding: 10,
              alignSelf: "center",
              textAlign: "center",
              width: 0.9*width
            }}
          >
            {route.params.val.bookName}
          </Text>
          <Image
            source={{
              uri: `http://192.168.100.18:5000${route.params.val.image}`,
            }}
            style={{
              height: 240,
              width: 160,
              borderBottomLeftRadius: 30,
              borderTopRightRadius: 30,
              margin: 20,
            }}
          />
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              padding: 10,
            }}
          >
            Price: PKR {route.params.val.price}
          </Text>
          <View
            style={{
              backgroundColor: "#E1B107",
              width: 0.9 * width,
              margin: 10,
              height: 200,
              padding:10,
              borderBottomLeftRadius: 30,
              borderTopRightRadius: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight:"bold",
                marginBottom:20
              }}
            >
     {route.params.val.authorName}
 
            </Text>
            <Text
              style={{
                fontSize: 12,
              }}
            >

     {route.params.val.description}
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Button
              style={{
                borderColor: "#E1B107",
                borderRadius: 25,
                borderWidth: 3,
                padding: 10,
                margin: 10
              }}
              onPress={move}
            >
              Buy Now
            </Button>

          
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
