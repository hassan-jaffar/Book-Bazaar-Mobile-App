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
  TouchableOpacity,
} from "react-native";
import { Card, Title } from "react-native-paper";
import * as React from "react";
import { useNavigation } from "@react-navigation/native";

const stores = [
  {
    image:
      "https://media.istockphoto.com/id/1129874863/photo/books-on-display-in-the-corner-of-a-second-hand-bookstore.jpg?b=1&s=170667a&w=0&k=20&c=6L29BYGOstzR6K3QInuOEwdMG-qNQa4Qc8by6tbq-pA=",
    name: "Store IOP",
  },
  {
    image:
      "https://media.istockphoto.com/id/1129874863/photo/books-on-display-in-the-corner-of-a-second-hand-bookstore.jpg?b=1&s=170667a&w=0&k=20&c=6L29BYGOstzR6K3QInuOEwdMG-qNQa4Qc8by6tbq-pA=",
    name: "Store ABC",
  },
  {
    image:
      "https://media.istockphoto.com/id/1129874863/photo/books-on-display-in-the-corner-of-a-second-hand-bookstore.jpg?b=1&s=170667a&w=0&k=20&c=6L29BYGOstzR6K3QInuOEwdMG-qNQa4Qc8by6tbq-pA=",
    name: "Store XYZ",
  },
  {
    image:
      "https://media.istockphoto.com/id/1129874863/photo/books-on-display-in-the-corner-of-a-second-hand-bookstore.jpg?b=1&s=170667a&w=0&k=20&c=6L29BYGOstzR6K3QInuOEwdMG-qNQa4Qc8by6tbq-pA=",
    name: "Store ASD",
  },
  {
    image:
      "https://media.istockphoto.com/id/1129874863/photo/books-on-display-in-the-corner-of-a-second-hand-bookstore.jpg?b=1&s=170667a&w=0&k=20&c=6L29BYGOstzR6K3QInuOEwdMG-qNQa4Qc8by6tbq-pA=",
    name: "Store DSA",
  },
];
export default function AllStores() {
  var width = Dimensions.get("window").width;
  var height = Dimensions.get("window").height;

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("StorePage");
  };
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
            uri: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8&w=1000&q=80",
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
              left: width / 5,
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
        <ScrollView>
          <View style={styles.container}>
            {stores.map((store) => {
              return (
                <TouchableOpacity onPress={onPress}>
                  <Card
                    style={{
                      backgroundColor: "#E1B107",
                      borderBottomLeftRadius: 30,
                      borderTopRightRadius: 30,
                      padding: 20,
                      margin: 10,
                      width: 0.4 * width,
                      alignItems: "center"
                    }}
                  >
                    <Image source={{ uri: store.image }} style={styles.image} />
                    <Title style={{ fontWeight: "bold", fontSize: 20 }}>
                      {store.name}
                    </Title>
                  </Card>
                </TouchableOpacity>
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
    paddingTop: 50,
    marginBottom: 100,
    flexDirection:'row', 
    flexWrap:'wrap',
    justifyContent: "center"
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 20,
  },
});
