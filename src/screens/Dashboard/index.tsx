import { useTheme } from "styled-components";
import { Feather } from "@expo/vector-icons";

import { UserInfo } from "@components/UserInfo";
import { HighlightCard } from "@components/HighlightCard";

import { CardsList, Container, Header, HeaderContent } from "./styles";

export function Dashboard() {
  const theme = useTheme();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <UserInfo />
          <Feather name="power" size={24} color={theme.COLORS.ORANGE} />
        </HeaderContent>
      </Header>

      <CardsList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 24 }}
      >
        <HighlightCard
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
          type="income"
        />
        <HighlightCard
          title="Saídas"
          amount="R$ 400,00"
          lastTransaction="Última saída dia 13 de abril"
          type="outcome"
        />
        <HighlightCard
          title="Total"
          amount="R$ 17.000,00"
          lastTransaction="01 a 13 de abril"
          type="total"
        />
      </CardsList>
    </Container>
  );
}
