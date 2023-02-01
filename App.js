import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "./Profile";
import PlaceOrder from "./PlaceOrder";
import MyOrders from "./MyOrders";
import Cart from "./Cart";
import BookPage from "./BookPage";
import StorePage from "./StorePage";
import Notifications from "./Notifications";
import Settings from "./Settings";
import { Ionicons } from "@expo/vector-icons";
import Login from "./Login";
import Signup from "./Signup";
import AllStores from "./AllStores";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          options={{ header: () => null }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          options={{ header: () => null }}
          name="Signup"
          component={Signup}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          options={{ header: () => null }}
          name="Stores"
          component={StackScreen}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          options={{ header: () => null }}
          name="StorePage"
          component={StorePage}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          options={{ header: () => null }}
          name="BookPage"
          component={BookPage}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          options={{ header: () => null }}
          name="PlaceOrder"
          component={PlaceOrder}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          options={{ header: () => null }}
          name="MyOrders"
          component={MyOrders}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          options={{ header: () => null }}
          name="Cart"
          component={Cart}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const Tab = createBottomTabNavigator();

export function StackScreen() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#E1B107",
        inactiveTintColor: "gray",
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "Support") {
            iconName = focused ? "contact-support" : "contact-support-outline";
          } else if (route.name === "Orders") {
            iconName = focused ? "list" : "list-outline";
          } 

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        options={{ header: () => null }}
        component={AllStores}
      />

      <Tab.Screen
        name="Orders"
        options={{ header: () => null }}
        component={MyOrders}
      />
      <Tab.Screen
        name="Support"
        options={{ header: () => null }}
        component={Settings}
      />
  
    </Tab.Navigator>
  );
}
