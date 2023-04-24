import { UserInfo } from "@components/UserInfo";
import { Text } from "react-native";

import { Container, Header } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserInfo />
        <Text></Text>
      </Header>
    </Container>
  );
}
