import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
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

export default function New() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold
  });
  if (!fontsLoaded) {
    return <Text>CARREGANDO FONTES...</Text>;
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.saldo_disponivel}>
          <Text style={styles.saldo}>Saldo disponível</Text>
          <Text style={styles.disponivel}>R$ 1206,80</Text>
        </View>

        <View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity>
              <Text
                style={[
                  styles.button,
                  {
                    marginLeft: 15,
                    marginTop: 35,
                    width: 160
                    // padding: 10
                  }
                ]}
              >
                <MaterialIcons name="security" size={20} color="white" />
                Proteger carteira
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={[
                  styles.button,
                  {
                    marginLeft: 20,
                    marginTop: 35,
                    width: 180
                    // padding: 10
                  }
                ]}
              >
                <Fontisto name="key" size={20} color="white" />
                Minhas chaves Pix
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Meus Cartões */}
        <View
          style={{
            backgroundColor: "#fff",
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            marginTop: 20,
            height: 550
          }}
        >
          <Text
            style={{
              fontFamily: "Montserrat_700Bold",
              fontSize: 25,
              marginLeft: 20,
              padding: 20
            }}
          >
            Meus cartões
          </Text>
          <View style={styles.cartao}>
            <Text style={{ fontFamily: "Montserrat_700Bold" }}>
              Card Débito
            </Text>
            <Text style={{ marginTop: 35, marginLeft: -90 }}>
              Número do Cartão: {"\n"}3456-9874-5632-1234
            </Text>

            <TouchableOpacity>
              <Text
                style={[
                  styles.button,
                  {
                    marginLeft: 40,
                    marginTop: 35
                  }
                ]}
              >
                Adionar dinheiro
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: "#fff",
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
              marginTop: -10,
              height: 550
            }}
          >
            <View style={styles.cartao}>
              <Text style={{ fontFamily: "Montserrat_700Bold" }}>
                Card Débito
              </Text>
              <Text style={{ marginTop: 35, marginLeft: -90 }}>
                Número do Cartão: {"\n"}4567-8901-2345-6789
              </Text>

              <TouchableOpacity>
                <Text
                  style={[
                    styles.button,
                    {
                      marginLeft: 40,
                      marginTop: 35
                    }
                  ]}
                >
                  Adionar dinheiro
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.cartao}>
              <Text style={{ fontFamily: "Montserrat_700Bold" }}>
                Card Crédito
              </Text>
              <Text style={{ marginTop: 35, marginLeft: -90 }}>
                Número do Cartão: {"\n"}5432-1098-7654-3210
              </Text>

              <TouchableOpacity>
                <Text
                  style={[
                    styles.button,
                    {
                      marginLeft: 40,
                      marginTop: 35
                    }
                  ]}
                >
                  Adionar dinheiro
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // margin: 20,
    backgroundColor: "#272e94c5"
  },
  saldo: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 25,
    color: "#fff"
  },
  disponivel: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 30,
    color: "#fff"
  },
  saldo_disponivel: {
    margin: 20
  },
  cartao: {
    backgroundColor: "#e8e8e7",
    borderRadius: 10,
    padding: 10,
    margin: 20,
    height: 100,
    flexDirection: "row"
  },
  button: {
    backgroundColor: "#3b64eedd",
    color: "#fff",
    padding: 10,
    width: 150,
    fontSize: 15,
    borderRadius: 10,
    marginTop: 30
  }
});
