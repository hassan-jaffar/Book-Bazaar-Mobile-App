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

export default function BookPage() {
  var width = Dimensions.get("window").width;
  var height = Dimensions.get("window").height;

  const navigation = useNavigation();

  const move = () => {
    navigation.navigate("PlaceOrder");
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
            alignItems: "center",
            textAlign: "center",
            height: height*1.2,
            width: width,
            backgroundColor: "#fff",
            paddingTop: 50,
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
              alignSelf: "center",
              textAlign: "center",
            }}
          >
            Book Title
          </Text>
          <Image
            source={{
              uri: "https://www.rd.com/wp-content/uploads/2019/11/heart-book-e1574702487427-scaled.jpg",
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
            Price: PKR 3000
          </Text>
          <View
            style={{
              backgroundColor: "#E1B107",
              width: 0.9 * width,
              margin: 10,
              height: 50,
              borderBottomLeftRadius: 30,
              borderTopRightRadius: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
              }}
            >
              Author Name and Description
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

            <Button
              style={{
                borderColor: "#E1B107",
                borderRadius: 25,
                borderWidth: 3,
                padding: 10,
                margin: 10
              }}
              onPress={moves}
            >
              Add to Cart
            </Button>
          </View>

          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Similar Books
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
          <ScrollView horizontal={true}>
            <Card
              style={{
                backgroundColor: "#E1B107",
                borderRadius: 20,
                padding: 20,
                margin: 10,
              }}
            >
              <Image
                source={{
                  uri: "https://www.rd.com/wp-content/uploads/2019/11/heart-book-e1574702487427-scaled.jpg",
                }}
                style={{
                  height: 100,
                  borderRadius: 20,
                }}
              />
              <Title style={{ fontWeight: "bold", fontSize: 14 }}>
                Book Name
              </Title>
            </Card>
            <Card
              style={{
                backgroundColor: "#E1B107",
                borderRadius: 20,
                padding: 20,
                margin: 10,
              }}
            >
              <Image
                source={{
                  uri: "https://www.rd.com/wp-content/uploads/2019/11/heart-book-e1574702487427-scaled.jpg",
                }}
                style={{
                  height: 100,
                  borderRadius: 20,
                }}
              />
              <Title style={{ fontWeight: "bold", fontSize: 14 }}>
                Book Name
              </Title>
            </Card>
            <Card
              style={{
                backgroundColor: "#E1B107",
                borderRadius: 20,
                padding: 20,
                margin: 10,
              }}
            >
              <Image
                source={{
                  uri: "https://www.rd.com/wp-content/uploads/2019/11/heart-book-e1574702487427-scaled.jpg",
                }}
                style={{
                  height: 100,
                  borderRadius: 20,
                }}
              />
              <Title style={{ fontWeight: "bold", fontSize: 14 }}>
                Book Name
              </Title>
            </Card>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
