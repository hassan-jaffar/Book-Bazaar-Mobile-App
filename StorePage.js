import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  ImageBackground,
  Image,
  TextInput,
  ScrollView,
  Button,
  TouchableOpacity
} from "react-native";
import { Col, Row, Grid } from "react-native-paper-grid";
import { BottomNavigation } from "react-native-paper";
import * as React from "react";
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
    name: "Book ASD",
    author: "rty",
    price: 16,
  },
  {
    image:
      "https://st.depositphotos.com/1741875/1237/i/600/depositphotos_12376816-stock-photo-stack-of-old-books.jpg",
    name: "Book DSA",
    author: "rty",
    price: 18,
  },
];

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const NotificationsRoute = () => <Text>Notifications</Text>;

export default function StorePage() {
  var width = Dimensions.get("window").width;
  var height = Dimensions.get("window").height;

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("BookPage");
  }

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "music",
      title: "Favorites",
      focusedIcon: "heart",
      unfocusedIcon: "heart-outline",
    },
    { key: "albums", title: "Albums", focusedIcon: "album" },
    { key: "recents", title: "Recents", focusedIcon: "history" },
    {
      key: "notifications",
      title: "Notifications",
      focusedIcon: "bell",
      unfocusedIcon: "bell-outline",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    notifications: NotificationsRoute,
  });

  return (
    <SafeAreaView>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          width: width,
          paddingBottom: 200,
          backgroundColor: "#fff",
        }}
      >
        <ImageBackground
          source={{
            uri: "https://thumbs.dreamstime.com/b/deventer-netherlands-aug-various-second-hand-books-sale-boekenmarkt-book-market-192444951.jpg",
          }}
          style={{
            height: 250,
            width: width,
            position: "relative", //parent
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 34,
              color: "white",
              position: "absolute", // child
              top: 80,
              left: width / 4,
              borderRadius: 30,
              borderColor: "#E1B107",
              borderWidth: 5,
              padding: 10,
              textAlign: "center",
              backgroundColor: "black",
            }}
          >
            Book Bazaar
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 14,
              color: "white",
              position: "absolute", // child
              top: 160,
              left: width / 4,
              textAlign: "center",
              backgroundColor: "black",
              padding: 5,
            }}
          >
            Shop Description and Address
          </Text>
        </ImageBackground>
        <TextInput
          placeholder="Enter your service description"
          style={{
            marginTop: -20,
            width: 0.9 * width,
            borderRadius: 30,
            borderColor: "#E1B107",
            borderWidth: 2,
            padding: 5,
            paddingLeft: 30,
            backgroundColor: "white",
          }}
        ></TextInput>
        {/* <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
          /> */}
        <ScrollView>
          <View style={styles.container}>
            {books.map((book) => {
              return (
                <View
                  style={{
                    backgroundColor: "#E1B107",
                    width: 0.9 * width,
                    margin: 10,
                    height: 100,
                    borderBottomLeftRadius: 30,
                    borderTopRightRadius: 30,
                  }}
                >
                  <TouchableOpacity onPress={onPress}>
                    <Grid>
                      <Row>
                        <Col size={2}>
                          <Image
                            source={{ uri: book.image }}
                            style={styles.image}
                          ></Image>
                        </Col>
                        <Col size={4}>
                          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                            {book.name}
                          </Text>
                          <Text>{book.author}</Text>
                        </Col>
                        <Col size={3}>
                          <Text style={{ marginTop: 5 }}>Price</Text>
                          <Text>PKR {book.price}</Text>
                        </Col>
                      </Row>
                    </Grid>
                  </TouchableOpacity>
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
    flex: 1,
    paddingTop: 50,
    marginBottom: 100,
  },
  image: {
    width: 40,
    height: 60,
    borderRadius: 10,
  },
});
