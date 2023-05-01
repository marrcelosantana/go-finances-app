import { Platform } from "react-native";

import AppleSvg from "../../assets/apple.svg";
import GoogleSvg from "../../assets/google.svg";
import LogoSvg from "../../assets/logo.svg";

import { RFValue } from "react-native-responsive-fontsize";
import { useToast } from "native-base";

import { SocialButton } from "@components/SocialButton";
import { useAuth } from "@hooks/useAuth";

import {
  Container,
  Footer,
  Social,
  Subtitle,
  Title,
  TitleContainer,
} from "./styles";

export function SignIn() {
  const { signInWithGoogle, signInWithApple } = useAuth();

  const toast = useToast();

  async function handleSignInWithGoogle() {
    try {
      await signInWithGoogle();
    } catch (error) {
      await toast.show({
        title: "Não foi possível conectar a conta Google.",
        placement: "top",
        bgColor: "red.500",
        color: "gray.100",
      });
    }
  }

  async function handleSignInWithApple() {
    try {
      await signInWithApple();
    } catch (error) {
      await toast.show({
        title: "Não foi possível conectar a conta Apple.",
        placement: "top",
        bgColor: "red.500",
        color: "gray.100",
      });
    }
  }

  return (
    <Container>
      <TitleContainer>
        <LogoSvg width={RFValue(120)} height={RFValue(68)} />
        <Title>
          Controle suas{"\n"} finanças de forma{"\n"} muito simples
        </Title>
        <Subtitle>Faça seu login com {"\n"} uma das contas abaixo</Subtitle>
      </TitleContainer>

      <Footer>
        <Social>
          <SocialButton
            title="Entrar com Google"
            svg={GoogleSvg}
            onPress={handleSignInWithGoogle}
          />
          {Platform.OS === "ios" && (
            <SocialButton
              title="Entrar com Apple"
              svg={AppleSvg}
              onPress={handleSignInWithApple}
            />
          )}
        </Social>
      </Footer>
    </Container>
  );
}
