import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./pages/Home/Home";
import Card from "./pages/Card/Card";
import New from "./pages/New/New";
import Search from "./pages/Search/Search";
import User from "./pages/User/User";

import ButtonNew from "./components/ButtonNew";

import { Entypo, Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabel: () => null,
        tabBarStyle: {
          backgroundColor: "#121212",
          borderTopWidth: 0,
          elevation: 0,
          borderTopColor: "transparent",
          paddingBottom: 5,
          paddingTop: 5
        },
        tabBarActiveTintColor: "#fff"
      }}
    >
      <Tab.Screen
        name=" "
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={size} color={color} />
          )
        }}
      />

      <Tab.Screen
        name="Cartão"
        component={Card}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="credit-card" size={size} color={color} />
          )
        }}
      />

      <Tab.Screen
        name="Minha Conta"
        component={New}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused, size, color }) => (
            <ButtonNew size={size} color={color} />
          )
        }}
      />

      <Tab.Screen
        name="Procurar"
        component={Search}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="search" size={size} color={color} />
          )
        }}
      />

      <Tab.Screen
        name="Usuário"
        component={User}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
}
