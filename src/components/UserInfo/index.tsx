import avatar from "../../assets/eu.jpg";

import { Avatar, Container, Info, Title, Username } from "./styles";

export function UserInfo() {
  return (
    <Container>
      <Avatar source={avatar} resizeMode="cover" />

      <Info>
        <Title>Olá,</Title>
        <Username numberOfLines={1}>Marcelo</Username>
      </Info>
    </Container>
  );
}
