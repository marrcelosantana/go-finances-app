import "react-native-gesture-handler";
import "intl";
import "intl/locale-data/jsonp/pt-BR";

import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import { NativeBaseProvider } from "native-base";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import { defaultTheme } from "@themes/default-theme";
import { AuthContextProvider } from "@contexts/AuthContext";

import { Loading } from "@components/Loading";
import { Routes } from "@routes/index";

import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NativeBaseProvider>
        <ThemeProvider theme={defaultTheme}>
          <StatusBar
            barStyle={"light-content"}
            backgroundColor="transparent"
            translucent
          />
          <AuthContextProvider>
            {fontsLoaded ? <Routes /> : <Loading />}
          </AuthContextProvider>
        </ThemeProvider>
      </NativeBaseProvider>
    </GestureHandlerRootView>
  );
}
