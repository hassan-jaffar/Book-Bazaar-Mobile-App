import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Col, Row, Grid } from "react-native-paper-grid";
import * as React from "react";

const orders = [
  {
    orderno: 4562,
    status: "Shipped",
    address: "Shipping Address",
    price: 1800,
    date: "18-04-2022",
  },
  {
    orderno: 4562,
    status: "Shipped",
    address: "Shipping Address",
    price: 1800,
    date: "18-04-2022",
  },
  {
    orderno: 4562,
    status: "Shipped",
    address: "Shipping Address",
    price: 1800,
    date: "18-04-2022",
  },
  {
    orderno: 4562,
    status: "Shipped",
    address: "Shipping Address",
    price: 1800,
    date: "18-04-2022",
  },
  {
    orderno: 4562,
    status: "Shipped",
    address: "Shipping Address",
    price: 1800,
    date: "18-04-2022",
  },
  {
    orderno: 4562,
    status: "Shipped",
    address: "Shipping Address",
    price: 1800,
    date: "18-04-2022",
  },
  {
    orderno: 4562,
    status: "Shipped",
    address: "Shipping Address",
    price: 1800,
    date: "18-04-2022",
  },
];

var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

export default function MyOrders() {
  return (
    <SafeAreaView>
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
            Order List
          </Text>

          <View style={styles.container}>
            {orders.map((order) => {
              return (
                <View
                  style={{
                    width: 0.8 * width,
                    margin: 10,
                    height: 100,
                    marginBottom: 20,
                  }}
                >
                  <Grid>
                    <Row>
                      <Col size={5}>
                        <Text style={{ fontWeight: "bold" }}>
                          Order No: #{order.orderno}
                        </Text>
                        <Text>Status: {order.status}</Text>
                        <Text
                          style={{
                            color: "red",
                            marginTop: 10,
                          }}
                        >
                          {order.address}
                        </Text>
                      </Col>
                      <Col size={3}>
                        <Text style={{ fontWeight: "bold" }}>Order Value</Text>
                        <Text>PKR {order.price}</Text>
                        <Text>{order.date}</Text>
                      </Col>
                    </Row>
                  </Grid>
                </View>
              );
            })}
          </View>
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
