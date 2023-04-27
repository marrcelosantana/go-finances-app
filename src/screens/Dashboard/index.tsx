import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useToast } from "native-base";

import { UserInfo } from "@components/UserInfo";
import { HighlightCard } from "@components/HighlightCard";
import { TransactionCard } from "@components/TransactionCard";

import { TransactionDTO } from "@models/TransactionDTO";

import {
  clearStorage,
  storageTransactionsGetAll,
} from "@storage/storageTransactions";

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
  const [transactions, setTransactions] = useState<TransactionDTO[]>([]);

  const toast = useToast();

  async function loadTransactions() {
    try {
      const response = await storageTransactionsGetAll();
      setTransactions(response);
    } catch (error) {
      toast.show({
        title: "Não foi possível carregar os dados.",
        placement: "top",
        bgColor: "red.500",
        color: "gray.100",
      });
    }
  }

  async function removeAllTransactions() {
    try {
      await clearStorage();
    } catch (error) {
      toast.show({
        title: "Não foi possível remover os dados.",
        placement: "top",
        bgColor: "red.500",
        color: "gray.100",
      });
    }
  }

  useFocusEffect(
    useCallback(() => {
      loadTransactions();
    }, [])
  );

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
