import AppleSvg from "../../assets/apple.svg";
import GoogleSvg from "../../assets/google.svg";
import LogoSvg from "../../assets/logo.svg";

import { RFValue } from "react-native-responsive-fontsize";

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
  const { user } = useAuth();

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
          <SocialButton title="Entrar com Google" svg={GoogleSvg} />
          <SocialButton title="Entrar com Apple" svg={AppleSvg} />
        </Social>
      </Footer>
    </Container>
  );
}
