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
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Login() {
  var width = Dimensions.get("window").width;
  var height = Dimensions.get("window").height;

  const navigation = useNavigation();
  const moves = () => {
    console.log(email);
    UerServices.login(email,password).then(async(val)=>{
      console.log(val);

      await AsyncStorage.setItem("user", val.token);
    navigation.navigate("Stores");
  }).catch((val)=>{
     Alert.alert(val.errors[0].msg);
    })
  };
  const move = () => {
    navigation.navigate("Signup");
  };
  const [email,setEmail]=React.useState("");
  const [password,setPassword]=React.useState("");

 
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
                  marginTop: 20,
                }}
              >
                LOGIN
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#E1B107",
                  padding: 10,
                  width: 0.9 * width,
                  textAlign: "center",
                  marginTop: 10,
                }}
              >
                Email
              </Text>
              <TextInput
                placeholder="Your Email"
                value={email}
                style={{
                  marginBottom: 20,
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
                 value={password}
                placeholder="Password"
                style={{
                  marginBottom: 20,
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
                Login
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
                  marginTop: 20
                }}
                onPress={move}
              >
                SIGNUP
              </Button>
            </View>
          </ImageBackground>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
