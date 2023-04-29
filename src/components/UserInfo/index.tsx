import { Avatar, Container, Info, Title, Username } from "./styles";

export function UserInfo() {
  return (
    <Container>
      <Avatar
        source={{ uri: "http://github.com/marrcelosantana.png" }}
        resizeMode="cover"
      />

      <Info>
        <Title>Olá,</Title>
        <Username numberOfLines={1}>Marcelo</Username>
      </Info>
    </Container>
  );
}
