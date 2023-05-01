import { useAuth } from "@hooks/useAuth";
import { Avatar, Container, Info, Title, Username } from "./styles";

export function UserInfo() {
  const { user } = useAuth();

  return (
    <Container>
      <Avatar source={{ uri: user.picture }} resizeMode="cover" />

      <Info>
        <Title>Olá,</Title>
        <Username numberOfLines={1}>{user.name}</Username>
      </Info>
    </Container>
  );
}
