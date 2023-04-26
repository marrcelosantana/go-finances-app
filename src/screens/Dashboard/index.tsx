import { useState } from "react";

import { UserInfo } from "@components/UserInfo";
import { HighlightCard } from "@components/HighlightCard";
import { TransactionCard } from "@components/TransactionCard";

import { TransactionDTO } from "@models/TransactionDTO";

import {
  CardsList,
  Container,
  Header,
  HeaderContent,
  Icon,
  LogoutButton,
  Title,
  Transactions,
  TransactionsList,
} from "./styles";

export function Dashboard() {
  const [transactions, setTransactions] = useState<TransactionDTO[]>([
    {
      type: "income",
      title: "Desenvolvimento de site",
      amount: "R$ 17.000,00",
      category: { name: "Vendas", icon: "dollar-sign" },
      date: "10/04/2023",
    },
    {
      type: "outcome",
      title: "Mercado",
      amount: "R$ 900,00",
      category: { name: "Alimentação", icon: "coffee" },
      date: "10/04/2023",
    },
    {
      type: "outcome",
      title: "Pizza",
      amount: "R$ 50,00",
      category: { name: "Alimentação", icon: "coffee" },
      date: "10/04/2023",
    },

    {
      type: "income",
      title: "Salário",
      amount: "R$ 8.500,00",
      category: { name: "Salário", icon: "dollar-sign" },
      date: "10/04/2023",
    },
  ]);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <UserInfo />
          <LogoutButton>
            <Icon name="power" />
          </LogoutButton>
        </HeaderContent>
      </Header>

      <CardsList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 24 }}
      >
        <HighlightCard
          title="Entradas"
          amount="R$ 25.500,00"
          lastTransaction="Última entrada dia 10 de abril"
          type="income"
        />
        <HighlightCard
          title="Saídas"
          amount="R$ 950,00"
          lastTransaction="Última saída dia 10 de abril"
          type="outcome"
        />
        <HighlightCard
          title="Total"
          amount="R$ 24.550,00"
          lastTransaction="01 a 10 de abril"
          type="total"
        />
      </CardsList>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionsList>
          {transactions.map((transaction, index) => (
            <TransactionCard transaction={transaction} key={index + 1} />
          ))}
        </TransactionsList>
      </Transactions>
    </Container>
  );
}
