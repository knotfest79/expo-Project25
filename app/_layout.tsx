import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import { Client, Account, ID } from "react-native-appwrite";
import { useContext, useState } from "react";
import { account } from "../lib/appwrite";

import { useColorScheme } from "@/hooks/useColorScheme";
import { databases } from "../lib/appwrite";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  //const [auth, setAuth] = useState<boolean>(null);

  //sign uo user
  const signup = async (email: string, password: string) => {
    await account.create(ID.unique(), email, password);
  };

  // //initialise AppWrite client
  // const client = new Client()
  //   .setProject("67c0eb1a00105d9a93fb")
  //   .setPlatform("au.edu.nsw.ait.testapp");

  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      {/* <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack> */}
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="signup" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
