import { Pressable } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRouterProps } from "@routes/tab.routes";

import { Container, Title } from "./styles";

export function SignIn() {
  const navigator = useNavigation<AppNavigatorRouterProps>();

  return (
    <Container>
      <Pressable
        onPress={() => {
          navigator.navigate("dashboard");
        }}
      >
        <Title>Login</Title>
      </Pressable>
    </Container>
  );
}
