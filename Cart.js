import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import { Col, Row, Grid } from "react-native-paper-grid";
import * as React from "react";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const books = [
  {
    image:
      "https://st.depositphotos.com/1741875/1237/i/600/depositphotos_12376816-stock-photo-stack-of-old-books.jpg",
    name: "Book IOP",
    author: "qwer",
    price: 10,
  },
  {
    image:
      "https://st.depositphotos.com/1741875/1237/i/600/depositphotos_12376816-stock-photo-stack-of-old-books.jpg",
    name: "Book ABC",
    author: "ads",
    price: 12,
  },
  {
    image:
      "https://st.depositphotos.com/1741875/1237/i/600/depositphotos_12376816-stock-photo-stack-of-old-books.jpg",
    name: "Book XYZ",
    author: "zxc",
    price: 14,
  },
  {
    image:
      "https://st.depositphotos.com/1741875/1237/i/600/depositphotos_12376816-stock-photo-stack-of-old-books.jpg",
    name: "Book XYZ",
    author: "zxc",
    price: 14,
  },
  {
    image:
      "https://st.depositphotos.com/1741875/1237/i/600/depositphotos_12376816-stock-photo-stack-of-old-books.jpg",
    name: "Book ABC",
    author: "ads",
    price: 12,
  },
];
var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

export default function Cart() {

  const navigation = useNavigation();

  const move = () => {
    navigation.navigate("PlaceOrder");
  };

  const moves = () => {
    navigation.navigate("StorePage");
  };

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: width,
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
            width: 0.5 * width,
            textAlign: "center",
            alignSelf: "center",
          }}
        >
          Your Cart
        </Text>

        <View style={styles.container}>
          {books.map((book) => {
            return (
              <View
                style={{
                  width: 0.8 * width,
                  margin: 10,
                  height: 90,
                  marginBottom: 20,
                }}
              >
                <Grid>
                  <Row>
                    <Col size={2}>
                      <Image
                        source={{ uri: book.image }}
                        style={styles.image}
                      ></Image>
                    </Col>
                    <Col size={5}>
                      <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                        {book.name}
                      </Text>
                      <Text>{book.author}</Text>
                      <Button
                        style={{
                          borderColor: "#E1B107",
                          width: 80,
                          marginTop: 5,
                        }}
                      >
                        Remove
                      </Button>
                    </Col>
                    <Col size={3}>
                      <Text style={{ fontWeight: "bold" }}>Price</Text>
                      <Text>PKR {book.price}</Text>
                      <Grid>
                        <Row>
                          <Col>
                            <Text
                              style={{
                                backgroundColor: "#E1B107",
                                borderColor: "black",
                                borderWidth: 1,
                                width: 20,
                                textAlign: "center",
                              }}
                            >
                              -
                            </Text>
                          </Col>
                          <Col>
                            <Text style={{ textAlign: "center" }}>2</Text>
                          </Col>
                          <Col>
                            <Text
                              style={{
                                backgroundColor: "#E1B107",
                                borderColor: "black",
                                borderWidth: 1,
                                width: 20,
                                textAlign: "center",
                              }}
                            >
                              +
                            </Text>
                          </Col>
                        </Row>
                      </Grid>
                    </Col>
                  </Row>
                </Grid>
              </View>
            );
          })}
          <View
            style={{
              backgroundColor: "white",
              width: 0.8 * width,
              height: 50,
              borderBottomLeftRadius: 30,
              borderTopRightRadius: 30,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 50,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              PKR 1800
            </Text>
          </View>
        </View>

        <View
          style={{
            width: 0.9 * width,
            marginTop: 20,
            marginBottom: 50,
          }}
        >
          <Grid>
            <Row>
              <Col>
                <Button
                  style={{
                    borderColor: "#E1B107",
                    borderRadius: 25,
                    borderWidth: 3,
                    padding: 10,
                  }}
                  onPress={moves}
                >
                  Add More
                </Button>
              </Col>
              <Col>
                <Button
                  style={{
                    borderColor: "#E1B107",
                    borderRadius: 25,
                    borderWidth: 3,
                    padding: 10,
                  }}
                  onPress={move}
                >
                  Checkout
                </Button>
              </Col>
            </Row>
          </Grid>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    backgroundColor: "#E1B107",
    width: 0.9 * width,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 50,
    height: 80,
    borderRadius: 10,
  },
});
