import { useCallback, useState } from "react";
import { Alert } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { Center, FlatList, useToast } from "native-base";

import { Coins } from "phosphor-react-native";
import { useTheme } from "styled-components";

import { UserInfo } from "@components/UserInfo";
import { HighlightCard } from "@components/HighlightCard";
import { TransactionCard } from "@components/TransactionCard";
import { Loading } from "@components/Loading";

import { TransactionDTO } from "@models/TransactionDTO";
import { dateFormatterLong, lastTransactionFormatter } from "@utils/formatters";
import { useAuth } from "@hooks/useAuth";

import {
  storageTransactionsGetAll,
  storageTransactionsRemove,
} from "@storage/storageTransactions";

import {
  CardsList,
  Container,
  EmptyList,
  EmptyText,
  Header,
  HeaderContent,
  Icon,
  LogoutButton,
  Title,
  Transactions,
} from "./styles";

export function Dashboard() {
  const { user, signOut } = useAuth();

  const [transactions, setTransactions] = useState<TransactionDTO[]>([]);

  const [incomesTotal, setIncomesTotal] = useState(0);
  const [outcomesTotal, setOutcomesTotal] = useState(0);
  const [total, setTotal] = useState(0);

  const [lastIncome, setLastIncome] = useState(0);
  const [lastOutcome, setLastOutcome] = useState(0);

  const toast = useToast();
  const theme = useTheme();

  async function loadTransactions() {
    let incomes = 0;
    let outcomes = 0;

    try {
      const data = await storageTransactionsGetAll(user.id);

      data.map((item) => {
        if (item.type === "income") {
          incomes += item.amount;
        } else {
          outcomes += item.amount;
        }
      });

      setIncomesTotal(incomes);
      setOutcomesTotal(outcomes);
      setTotal(incomes - outcomes);

      const lastIncome = lastTransactionFormatter(data, "income");
      const lastOutcome = lastTransactionFormatter(data, "outcome");

      setLastIncome(lastIncome);
      setLastOutcome(lastOutcome);

      setTransactions(data);
    } catch (error) {
      await toast.show({
        title: "Não foi possível carregar os dados.",
        placement: "top",
        bgColor: "red.500",
        color: "gray.100",
      });
    }
  }

  async function removeTransaction(transactionId: string) {
    try {
      await storageTransactionsRemove(transactionId, user.id);

      await toast.show({
        title: "Transação removida!",
        placement: "top",
        bgColor: "green.500",
        color: "gray.100",
      });

      await loadTransactions();
    } catch (error) {
      await toast.show({
        title: "Não foi possível remover a transação.",
        placement: "top",
        bgColor: "red.500",
        color: "gray.100",
      });
    }
  }

  async function onRemove(id: string) {
    Alert.alert("Remover", "Deseja remover a transação?", [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: () => removeTransaction(id) },
    ]);
  }

  async function handleSignOut() {
    try {
      await signOut();
    } catch (error) {
      await toast.show({
        title: "Não foi possível deslogar.",
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
              <LogoutButton onPress={handleSignOut}>
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
              lastTransaction={
                lastIncome > 0
                  ? `Última entrada dia ${dateFormatterLong.format(
                      new Date(lastIncome)
                    )}`
                  : "Não há transações"
              }
              type="income"
            />
            <HighlightCard
              title="Saídas"
              amount={outcomesTotal}
              lastTransaction={
                lastOutcome > 0
                  ? `Última saída dia ${dateFormatterLong.format(
                      new Date(lastOutcome)
                    )}`
                  : "Não há transações"
              }
              type="outcome"
            />
            <HighlightCard
              title="Total"
              amount={total}
              lastTransaction={`Extrato até dia ${dateFormatterLong.format(
                new Date()
              )}`}
              type="total"
            />
          </CardsList>

          <Transactions>
            <Title>Listagem</Title>

            <FlatList
              data={transactions}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TransactionCard
                  transaction={item}
                  handleRemoveTransaction={onRemove}
                />
              )}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 24 }}
              ListEmptyComponent={() => (
                <EmptyList>
                  <Coins size={36} weight="bold" color={theme.COLORS.TEXT} />
                  <EmptyText>Sem transações ainda.</EmptyText>
                </EmptyList>
              )}
            />
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
