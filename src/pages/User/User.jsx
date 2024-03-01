import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold
} from "@expo-google-fonts/montserrat";
import {
  Octicons,
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign
} from "@expo/vector-icons";

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold
  });

  if (!fontsLoaded) {
    return <Text>CARREGANDO FONTES...</Text>;
  } else {
    return (
      <View>
        <Text style={styles.texto}>Meu Perfil</Text>
        <View style={styles.perfil}>
          <Image
            style={styles.imgProfile}
            source={{
              uri: "https://i.pinimg.com/736x/6c/ee/e1/6ceee1e537812c9e11df864413874221.jpg"
            }}
          />
          <View style={styles.conteudo}>
            <Text style={styles.name}>Daniel</Text>
            <Text style={styles.agency}>Ag. 113-9 Cc.27376-7</Text>
            <Text style={styles.agency}>Visto em 24/02/24 às 18:50</Text>
          </View>
        </View>
        <View style={styles.confg}>
          <Text
            style={{
              color: "#868585",
              fontFamily: "Montserrat_700Bold",
              marginLeft: 15
            }}
          >
            CONFIGURAÇÕES
          </Text>
        </View>
        <View
          style={[
            styles.perfil,
            {
              borderWidth: 1,
              borderColor: "#cacaca",
              shadowOffset: { width: -5, height: -5 },
              shadowOpacity: 0.6,
              shadowRadius: 6,
              shadowColor: "rgba(94,94,94,0.9)"
            }
          ]}
        >
          <Octicons style={styles.general} name="gear" size={24} color="blue" />
          <View style={styles.conteudo_descrition}>
            <Text style={styles.name}>Geral</Text>
            <Text style={styles.descrition}>
              Configure notificações, acesso ao App, imagens da tela de login
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.perfil,
            {
              borderWidth: 1,
              borderColor: "#fdfdfde8",
              shadowOffset: { width: -5, height: -5 },
              shadowOpacity: 0.1,
              shadowRadius: 6,
              shadowColor: "rgba(94,94,94,0.9)"
            }
          ]}
        >
          <MaterialCommunityIcons
            style={styles.general}
            name="smart-card"
            size={24}
            color="blue"
          />
          <View style={styles.conteudo_descrition}>
            <Text style={styles.name}>Cadastro</Text>
            <Text style={styles.descrition}>
              Edite dados pessoais, profissionais, email, telefone e outros
              itens
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.perfil,
            {
              borderWidth: 1,
              borderColor: "#fdfdfde8",
              shadowOffset: { width: -5, height: -5 },
              shadowOpacity: 0.1,
              shadowRadius: 6,
              shadowColor: "rgba(94,94,94,0.9)"
            }
          ]}
        >
          <MaterialIcons
            style={styles.general}
            name="privacy-tip"
            size={24}
            color="blue"
          />
          <View style={styles.conteudo_descrition}>
            <Text style={styles.name}>Privacidade</Text>
            <Text style={styles.descrition}>
              Personalize sua privacidade esaiba como nosso tratamos seus dados
              pessoais
            </Text>
          </View>
        </View>
        <View style={styles.confg}>
          <Text
            style={{
              color: "#868585",
              fontFamily: "Montserrat_700Bold",
              marginLeft: 15
            }}
          >
            SEGURANÇA
          </Text>
        </View>
        <View
          style={[
            styles.perfil,
            {
              borderWidth: 1,
              borderColor: "#fdfdfde8",
              shadowOffset: { width: -5, height: -5 },
              shadowOpacity: 0.1,
              shadowRadius: 6,
              shadowColor: "rgba(94,94,94,0.9)"
            }
          ]}
        >
          <MaterialIcons
            style={styles.general}
            name="security"
            size={24}
            color="blue"
          />
          <View style={styles.conteudo_descrition}>
            <Text style={styles.name}>Central de Segurança</Text>
          </View>
        </View>
        <View>
          <View
            style={[
              styles.perfil,
              {
                borderWidth: 1,
                borderColor: "#fdfdfde8",
                shadowOffset: { width: -5, height: -5 },
                shadowOpacity: 0.1,
                shadowRadius: 6,
                shadowColor: "rgba(94,94,94,0.9)"
              }
            ]}
          >
            <AntDesign
              style={styles.general}
              name="qrcode"
              size={24}
              color="blue"
            />
            <Text style={styles.name}>Code</Text>
            <Text
              style={{
                marginTop: 45,
                marginLeft: -42
              }}
            >
              Habilitado
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  texto: {
    fontSize: 20,
    textAlign: "center",
    margin: 15,
    color: "#333",
    fontWeight: "bold",
    fontFamily: ""
  },
  imgProfile: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginLeft: 20,
    marginTop: 20,
    marginRight: 10
  },
  perfil: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "stretch"
  },
  name: {
    fontSize: 15,
    marginTop: 25,
    marginLeft: 10,
    fontFamily: "Montserrat_700Bold"
  },
  agency: {
    fontSize: 14,
    marginLeft: 10
  },
  conteudo: {
    flexDirection: "column"
  },
  confg: {
    marginTop: 30,
    backgroundColor: "#ebe9e9",
    paddingLeft: 10,
    textAlignVertical: "center",
    borderWidth: 1,
    borderColor: "#cacaca",
    shadowOffset: { width: -10, height: -10 },
    shadowOpacity: 0.6,
    shadowRadius: 16,
    elevation: 16,
    shadowColor: "rgba(94,94,94,0.9)",
    padding: 20
  },
  descrition: {
    width: "60%",
    marginLeft: 10
  },
  conteudo_descrition: {
    marginLeft: 20
  },
  general: {
    marginTop: 25,
    marginLeft: 20
  }
});
