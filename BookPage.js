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
  import { Button } from "react-native-paper";
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
              height: height,
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
                textAlign: "center"
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
                flex: 1,
                width: 0.9 * width,
                height: 20,
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
                      onPress={move}
                    >
                      Buy Now
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
                      onPress={moves}
                    >
                      Add to Cart
                    </Button>
                  </Col>
                </Row>
              </Grid>
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
                flex: 1,
                width: 0.9 * width,
                height: 150,
                marginBottom: 100,
              }}
            >
              <Grid>
                <Row>
                  <Col
                    style={{
                      backgroundColor: "#E1B107",
                      margin: 10,
                      borderRadius: 20,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={{
                        uri: "https://www.rd.com/wp-content/uploads/2019/11/heart-book-e1574702487427-scaled.jpg",
                      }}
                      style={{
                        height: 100,
                        width: 60,
                        marginTop: 40,
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "bold",
                        padding: 10,
                      }}
                    >
                      Book Name
                    </Text>
                  </Col>
                  <Col
                    style={{
                      backgroundColor: "#E1B107",
                      margin: 10,
                      borderRadius: 20,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={{
                        uri: "https://www.rd.com/wp-content/uploads/2019/11/heart-book-e1574702487427-scaled.jpg",
                      }}
                      style={{
                        height: 100,
                        width: 60,
                        marginTop: 40,
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "bold",
                        padding: 10,
                      }}
                    >
                      Book Name
                    </Text>
                  </Col>
                  <Col
                    style={{
                      backgroundColor: "#E1B107",
                      margin: 10,
                      borderRadius: 20,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={{
                        uri: "https://www.rd.com/wp-content/uploads/2019/11/heart-book-e1574702487427-scaled.jpg",
                      }}
                      style={{
                        height: 100,
                        width: 60,
                        marginTop: 40,
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "bold",
                        padding: 10,
                      }}
                    >
                      Book Name
                    </Text>
                  </Col>
                </Row>
              </Grid>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
  