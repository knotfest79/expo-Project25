import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { useState, useEffect } from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { FormLabel } from "@/components/FromLabel";

export default function SignUp() {
  const [email, SetEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Sign up</Text>
        <FormLabel color="black" bg="transparent" text="Email" />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(val) => SetEmail(val)}
        />
        <FormLabel color="black" bg="transparent" text="Password" />

        <TextInput
          style={styles.input}
          secureTextEntry={true}
          value={password}
          onChangeText={(val) => setPassword(val)}
        />

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Sign up</Text>
        </Pressable>
        <Link href="/">
          <Text>Go to login</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFDE59",
  },
  form: {
    marginTop: 50,
    marginHorizontal: 40,
  },
  title: {
    fontSize: 32,
    textAlign: "center",
  },
  input: {
    fontSize: 18,
    backgroundColor: "white",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    padding: 5,
  },
  button: {
    marginVertical: 15,
    padding: 10,
    backgroundColor: "hsl(64, 60%, 30%)",
  },
  buttonText: {
    textAlign: "center",
    color: "hsl(64, 60%, 90%)",
  },
});
