import {
  Text,
  View,
  Dimensions,
  SafeAreaView,
  ScrollView,
  TextInput,
  Image,
  ImageBackground,
  Alert,
} from "react-native";
import * as React from "react";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import UerServices from "./Services/services/UserServices";

export default function Signup() {
  var width = Dimensions.get("window").width;
  var height = Dimensions.get("window").height;
  const navigation = useNavigation();
  const move = () => {
    navigation.navigate("Login");
  };
  const moves = () => {
    console.log(email);
    UerServices.Register(username,email,password).then((val)=>{
    navigation.navigate("Login");
  }).catch((val)=>{
     Alert.alert(val.errors[0].msg);
    })  };
  const [email,setEmail]=React.useState("");
  const [password,setPassword]=React.useState("");
  const [username,setUserName]=React.useState("");
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
        }}
      >
        <ScrollView>
          <ImageBackground
            source={{
              uri: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8&w=1000&q=80",
            }}
            style={{
              height: height,
              width: width,
              position: "relative", //parent
            }}
          >
            <View
              style={{
                position: "absolute",
                justifyContent: "center",
                alignItems: "center",
                height: height,
                width: width,
              }}
            >
              <Text
                style={{
                  fontSize: 36,
                  fontWeight: "bold",
                  color: "#E1B107",
                  padding: 10,
                  width: 0.9 * width,
                  textAlign: "center",
                }}
              >
                SIGNUP
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#E1B107",
                  padding: 10,
                  width: 0.9 * width,
                  textAlign: "center",
                }}
              >
                Username
              </Text>
              <TextInput
                placeholder="Your Username"
                style={{
                  marginBottom: 10,
                  width: 0.9 * width,
                  borderRadius: 30,
                  borderColor: "#E1B107",
                  borderWidth: 2,
                  padding: 10,
                  paddingLeft: 30,
                  backgroundColor: "white",
                }}
                onChangeText={(e)=>setUserName(e)}
              ></TextInput>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#E1B107",
                  padding: 10,
                  width: 0.9 * width,
                  textAlign: "center",
                }}
              >
                Email
              </Text>
              <TextInput
                placeholder="Your Email"
                style={{
                  marginBottom: 10,
                  width: 0.9 * width,
                  borderRadius: 30,
                  borderColor: "#E1B107",
                  borderWidth: 2,
                  padding: 10,
                  paddingLeft: 30,
                  backgroundColor: "white",
                }}
                onChangeText={(e)=>setEmail(e)}
              ></TextInput>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#E1B107",
                  padding: 10,
                  width: 0.9 * width,
                  textAlign: "center",
                }}
              >
                Password
              </Text>
              <TextInput
                placeholder="Your Password"
                style={{
                  marginBottom: 10,
                  width: 0.9 * width,
                  borderRadius: 30,
                  borderColor: "#E1B107",
                  borderWidth: 2,
                  padding: 10,
                  paddingLeft: 30,
                  backgroundColor: "white",
                }}
                onChangeText={(e)=>setPassword(e)}
              ></TextInput>
              <Button
                textColor="#E1B107"
                style={{
                  borderColor: "#E1B107",
                  borderRadius: 25,
                  borderWidth: 3,
                  padding: 10,
                  width: 0.3 * width,
                  marginTop: 10,
                  marginBottom: 50,
                  alignSelf: "center",
                }}
                onPress={moves}
              >
                Signup
              </Button>

              <Button
                textColor="#E1B107"
                style={{
                  // borderColor: "#E1B107",
                  // borderRadius: 25,
                  // borderWidth: 3,
                  padding: 10,
                  width: 0.3 * width,
                  alignSelf: "center",
                }}
                onPress={move}
              >
                LOGIN
              </Button>
            </View>
          </ImageBackground>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
