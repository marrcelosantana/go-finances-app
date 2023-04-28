import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { Center, useToast } from "native-base";

import { UserInfo } from "@components/UserInfo";
import { HighlightCard } from "@components/HighlightCard";
import { TransactionCard } from "@components/TransactionCard";
import { Loading } from "@components/Loading";

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
  const [incomesTotal, setIncomesTotal] = useState(0);
  const [outcomesTotal, setOutcomesTotal] = useState(0);
  const [total, setTotal] = useState(0);

  const toast = useToast();

  async function loadTransactions() {
    let incomes = 0;
    let outcomes = 0;

    try {
      const response = await storageTransactionsGetAll();

      response.map((item) => {
        if (item.type === "income") {
          incomes += item.amount;
        } else {
          outcomes += item.amount;
        }
      });

      setIncomesTotal(incomes);
      setOutcomesTotal(outcomes);
      setTotal(incomes - outcomes);

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
    <>
      {transactions ? (
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
              amount={incomesTotal}
              lastTransaction="Última entrada dia 10 de abril"
              type="income"
            />
            <HighlightCard
              title="Saídas"
              amount={outcomesTotal}
              lastTransaction="Última saída dia 10 de abril"
              type="outcome"
            />
            <HighlightCard
              title="Total"
              amount={total}
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
      ) : (
        <Center flex={1}>
          <Loading />
        </Center>
      )}
    </>
  );
}
