import { StyleSheet, Text, View } from "react-native";
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
          </View>

          <View style={styles.despesas}>
            <Text
              style={{
                color: "#f8f8f8",
                fontSize: 30,
                fontFamily: "Montserrat_700Bold",
                marginTop: 40,
                marginLeft: -20
              }}
            >
              {" "}
              Você pode verificar {"\n"} seus cartôes aqui
            </Text>
          </View>
          <View style={styles.cartao}>
            <Text
              style={{
                color: "#fff",
                fontSize: 25,
                fontFamily: "Montserrat_700Bold",
                marginTop: 30,
                marginLeft: 5
              }}
            >
              R$4.500,00
            </Text>
            <Text
              style={{
                color: "#fff",
                fontSize: 20,
                fontFamily: "Montserrat_700Bold",
                marginTop: 5,
                marginLeft: 5
              }}
            >
              Empresa
            </Text>
          </View>

          <View style={styles.cartao_casa}>
            <Text
              style={{
                color: "#6c6b6b",
                fontSize: 25,
                fontFamily: "Montserrat_700Bold",
                marginTop: 30,
                marginLeft: 5
              }}
            >
              R$4.000,00
            </Text>
            <Text
              style={{
                color: "#6c6b6b",
                fontSize: 15,
                fontFamily: "Montserrat_700Bold",
                marginTop: 5,
                marginLeft: 5
              }}
            >
              Casa
            </Text>
          </View>
          <View>
            <Text
              style={[
                styles.despesas,
                {
                  fontSize: 20,
                  fontFamily: "Montserrat_700Bold",
                  color: "#414040"
                }
              ]}
            >
              Transações recentes
            </Text>
            <View style={styles.gastos}>
              <Fontisto
                style={styles.icons}
                name="shopping-bag"
                size={20}
                color="black"
              />
              <View>
                <Text
                  style={{
                    color: "#000",
                    fontSize: 20,
                    fontFamily: "Montserrat_400Regular",
                    marginLeft: 10
                  }}
                >
                  Shopping
                </Text>
                <Text
                  style={{
                    color: "#7a7a7a",
                    fontSize: 15,
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
                    marginLeft: 120,
                    marginTop: 10
                  }}
                >
                  -R$120
                  <MaterialIcons
                    style={{ color: "#787878" }}
                    name="keyboard-arrow-right"
                    size={24}
                    color="black"
                  />
                </Text>
              </View>
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
    height: "65%",
    padding: 20,
    borderBottomLeftRadius: 85,
    borderBottomRightRadius: 85,
    borderWidth: 2,
    borderColor: "#62646467"
  },
  cartao: {
    backgroundColor: "#5edae3b2",
    width: 210,
    height: 260,
    padding: 10,
    borderRadius: 30,
    marginTop: 40,
    marginLeft: 10
  },
  cartao_casa: {
    backgroundColor: "#fff",
    marginLeft: 245,
    padding: 10,
    borderRadius: 30,
    width: 180,
    height: 230,
    marginTop: -245,

    shadowColor: "black",
    shadowOpacity: 0.9,
    shadowRadius: 8,
    elevation: 5
  },
  despesas: {
    alignItems: "center",
    marginTop: 40
  },
  gastos: {
    flexDirection: "row",
    padding: 20
  },
  icons: {
    marginLeft: -30,
    marginTop: -5,
    padding: 20,
    backgroundColor: "#468cfe",
    borderRadius: 150
  }
});
