import { StyleSheet, Text, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { Feather, AntDesign } from "@expo/vector-icons";

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold
} from "@expo-google-fonts/montserrat";

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold
  });

  if (!fontsLoaded) {
    return <Text>CARREGANDO FONTES...</Text>;
  } else {
    return (
      <View style={styles.container}>
        {/* <StatusBar style="auto" /> */}
        <LinearGradient
          colors={["rgba(73, 96, 249, 1)", "rgba(25, 55, 254, 1)"]}
          style={styles.headerGradient}
        >
          <View style={styles.row1}>
            <Feather name="menu" size={24} color="white" />

            <Image
              style={styles.imgProfile}
              source={{
                uri: "https://i.pinimg.com/736x/6c/ee/e1/6ceee1e537812c9e11df864413874221.jpg"
              }}
            />
          </View>

          <Text style={styles.txtWelcome}>Bem Vindo(a),{"\n"}Usuário</Text>
        </LinearGradient>

        <View style={{ width: "100%", alignItems: "center" }}>
          <View style={styles.ResulmoSaldo}>
            <Text
              style={{
                color: "#3A3A3A",
                fontSize: 16,
                fontFamily: "Montserrat_400Regular"
              }}
            >
              Seu saldo total
            </Text>
            <Text
              style={{
                color: "#2D99FF",
                fontSize: 30,
                fontFamily: "Montserrat_700Bold"
              }}
            >
              {" "}
              R$ 8.500,00
            </Text>
            <Image
              source={require("../assets/images.png")}
              style={{
                height: 190
              }}
            />
          </View>
          <View style={styles.VerifAccount}>
            <LinearGradient
              colors={["rgba(73, 96, 249, 1)", "rgba(20, 51, 255, 1)"]}
              style={styles.AccountGradient}
            >
              <View style={styles.AccountTextContainer}>
                <Text
                  style={{
                    color: "white",
                    fontSize: 19,
                    fontFamily: "Montserrat_400Regular"
                  }}
                >
                  Verifique suas contas bancárias
                </Text>
                <View style={styles.iconContainer}>
                  <AntDesign name="arrowright" size={24} color="white" />
                </View>
              </View>
            </LinearGradient>
          </View>
        </View>
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
    height: "30%",
    padding: 20,
    borderBottomLeftRadius: 85,
    borderBottomRightRadius: 85
  },
  imgProfile: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
  row1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 5
  },
  txtWelcome: {
    color: "white",
    fontSize: 28,
    fontFamily: "Montserrat_400Regular",
    marginLeft: 50
  },
  ResulmoSaldo: {
    backgroundColor: "#fff",
    width: "80%",
    height: "50%",
    top: -50,
    borderRadius: 30,
    padding: 20,

    shadowColor: "black",
    shadowOpacity: 0.9,
    shadowRadius: 8,
    elevation: 5
  },
  VerifAccount: {
    width: "80%",
    height: "20%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 20
  },

  AccountGradient: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    paddingLeft: 20,
    justifyContent: "center",

    shadowColor: "black",
    shadowOpacity: 0.9,
    shadowRadius: 8,
    elevation: 5
  },
  AccountTextContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  iconContainer: {
    justifyContent: "center",
    paddingRight: 15
  }
});
