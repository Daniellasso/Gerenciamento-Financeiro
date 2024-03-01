import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  Feather,
  AntDesign,
  MaterialIcons,
  Fontisto,
  Ionicons
} from "@expo/vector-icons";

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold
} from "@expo-google-fonts/montserrat";

export default function Card() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold
  });
  if (!fontsLoaded) {
    return <Text>CARREGANDO FONTES...</Text>;
  } else {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={["rgba(73, 96, 249, 1)", "#652dde"]}
          style={styles.headerGradient}
        >
          <View style={styles.row1}>
            <AntDesign name="arrowleft" size={24} color="white" />

            <Text style={styles.name}>Transações</Text>
          </View>

          <View style={styles.despesas}>
            <Text
              style={{
                color: "#43bdf1",
                fontSize: 25,
                fontFamily: "Montserrat_400Regular"
              }}
            >
              Suas despesas totais
            </Text>
            <Text
              style={{
                color: "#f8f8f8",
                fontSize: 30,
                fontFamily: "Montserrat_700Bold"
              }}
            >
              {" "}
              R$ 1.063,30
            </Text>
          </View>
        </LinearGradient>

        <LinearGradient
          colors={["rgba(73, 96, 249, 1)", "#916be2"]}
          style={styles.BottomGradient}
        >
          <View style={styles.gastos}>
            <Fontisto
              style={styles.icons}
              name="shopping-bag"
              size={24}
              color="black"
            />
            <View>
              <Text
                style={{
                  color: "#43bdf1",
                  fontSize: 20,
                  fontFamily: "Montserrat_400Regular",
                  marginTop: -10,
                  marginLeft: 10
                }}
              >
                Shopping
              </Text>
              <Text
                style={{
                  color: "#f8f8f8",
                  fontSize: 20,
                  fontFamily: "Montserrat_400Regular",
                  marginLeft: 10
                }}
              >
                15/01/2024
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "Montserrat_400Regular",
                  marginLeft: 120
                }}
              >
                -R$120
                <MaterialIcons
                  style={{ color: "#43bdf1" }}
                  name="keyboard-arrow-right"
                  size={24}
                  color="black"
                />
              </Text>
            </View>
          </View>

          <View style={styles.gastos}>
            <Fontisto
              style={styles.icons}
              name="pills"
              size={24}
              color="black"
            />
            <View>
              <Text
                style={{
                  color: "#43bdf1",
                  fontSize: 20,
                  fontFamily: "Montserrat_400Regular",
                  marginTop: -10,
                  marginLeft: 10
                }}
              >
                Remédio
              </Text>
              <Text
                style={{
                  color: "#f8f8f8",
                  fontSize: 20,
                  fontFamily: "Montserrat_400Regular",
                  marginLeft: 10
                }}
              >
                15/01/2024
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "Montserrat_400Regular",
                  marginLeft: 95
                }}
              >
                -R$89.50
                <MaterialIcons
                  style={{ color: "#43bdf1" }}
                  name="keyboard-arrow-right"
                  size={24}
                  color="black"
                />
              </Text>
            </View>
          </View>

          <View style={styles.gastos}>
            <Ionicons
              style={styles.icons}
              name="barbell"
              size={24}
              color="black"
            />
            <View>
              <Text
                style={{
                  color: "#43bdf1",
                  fontSize: 20,
                  fontFamily: "Montserrat_400Regular",
                  marginTop: -10,
                  marginLeft: 10
                }}
              >
                Academia
              </Text>
              <Text
                style={{
                  color: "#f8f8f8",
                  fontSize: 20,
                  fontFamily: "Montserrat_400Regular",
                  marginLeft: 10
                }}
              >
                15/01/2024
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "Montserrat_400Regular",
                  marginLeft: 95
                }}
              >
                -R$99.90
                <MaterialIcons
                  style={{ color: "#43bdf1" }}
                  name="keyboard-arrow-right"
                  size={24}
                  color="black"
                />
              </Text>
            </View>
          </View>

          <View style={styles.gastos}>
            <Fontisto
              style={styles.icons}
              name="shopping-bag"
              size={24}
              color="black"
            />
            <View>
              <Text
                style={{
                  color: "#43bdf1",
                  fontSize: 20,
                  fontFamily: "Montserrat_400Regular",
                  marginTop: -10,
                  marginLeft: 10
                }}
              >
                Shopping
              </Text>
              <Text
                style={{
                  color: "#f8f8f8",
                  fontSize: 20,
                  fontFamily: "Montserrat_400Regular",
                  marginLeft: 10
                  // marginTop: -10
                }}
              >
                15/01/2024
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "Montserrat_400Regular",
                  marginLeft: 115
                }}
              >
                -R$399
                <MaterialIcons
                  style={{ color: "#43bdf1" }}
                  name="keyboard-arrow-right"
                  size={24}
                  color="black"
                />
              </Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7f7f7",
    alignItems: "center"
  },
  headerGradient: {
    width: "100%",
    height: "40%",
    padding: 20,
    borderBottomLeftRadius: 85,
    borderBottomRightRadius: 85,
    borderWidth: 2,
    borderColor: "#32e2ef67"
  },
  imgProfile: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
  row1: {
    flexDirection: "row",
    alignItems: "center",
    margin: 5
  },
  name: {
    fontSize: 15,
    marginLeft: 100,
    fontFamily: "Montserrat_700Bold",
    color: "#fff",
    alignItems: "center"
  },
  despesas: {
    alignItems: "center",
    marginTop: 70
  },
  BottomGradient: {
    width: "100%",
    height: "50%",
    marginTop: 30,
    padding: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginBottom: 100
  },
  gastos: {
    flexDirection: "row",
    padding: 20
  },
  icons: {
    marginLeft: -30,
    marginTop: -10,
    padding: 15,
    backgroundColor: "#468cfe",
    borderRadius: 150
  }
});
