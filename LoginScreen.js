import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";

const imgUrl = {
  uri: "https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?w=1060&t=st=1683647356~exp=1683647956~hmac=25eda83dfaf29e7b76011b36949db3ac463318e3ba0935e13850106f9fd5acc8https://images.all-free-download.com/images/graphiclarge/blue_abstract_background_310971.jpg",
};

const LoginScreen = () => {
  return (
    <ImageBackground source={imgUrl} resizeMethod="resize" style={styles.image}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  image: { width: "100%", height: "100%", flex: 1 },
  title: {
    fontSize: 40,
    textAlign: "center",
    margin: 10,
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "black",
    borderBottomWidth: 1,
    marginTop: 8,
    marginBottom: 8,
    paddingLeft: 10,
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 30,
    marginTop: 8,
  },
  buttonText: {
    color: "#000",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default LoginScreen;
