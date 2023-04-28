import { useCallback, useState } from "react";
import { Center, FlatList, useToast } from "native-base";
import { useFocusEffect } from "@react-navigation/native";

import { HistoryCard } from "@components/HistoryCard";
import { Loading } from "@components/Loading";

import { TransactionDTO } from "@models/TransactionDTO";
import { categories } from "@utils/categories";
import { storageTransactionsGetAll } from "@storage/storageTransactions";

import { Container, Content, Header, Title } from "./styles";

interface CategoryData {
  name: string;
  total: number;
  color: string;
}

export function Summary() {
  const [transactions, setTransactions] = useState<TransactionDTO[]>([]);
  const [totalByCategory, setTotalByCategory] = useState<CategoryData[]>([]);

  const toast = useToast();

  async function loadTransactions() {
    try {
      const data = await storageTransactionsGetAll();
      const totalByCategory: CategoryData[] = [];

      const outcomes = data.filter(
        (transaction: TransactionDTO) => transaction.type === "outcome"
      );

      categories.forEach((category) => {
        let amountByCategory = 0;

        outcomes.forEach((transaction: TransactionDTO) => {
          if (transaction.category === category.key) {
            amountByCategory += transaction.amount;
          }
        });
        if (amountByCategory > 0) {
          totalByCategory.push({
            name: category.name,
            total: amountByCategory,
            color: category.color,
          });
        }
      });

      setTotalByCategory(totalByCategory);

      setTransactions(data);
    } catch (error) {
      toast.show({
        title: "Não foi possível carregar os dados.",
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
            <Title>Resumo por categoria</Title>
          </Header>

          <Content>
            <FlatList
              data={totalByCategory}
              keyExtractor={(item) => item.name}
              contentContainerStyle={{ paddingBottom: 24 }}
              renderItem={({ item }) => (
                <HistoryCard
                  name={item.name}
                  total={item.total}
                  color={item.color}
                />
              )}
            />
          </Content>
        </Container>
      ) : (
        <Center flex={1}>
          <Loading />
        </Center>
      )}
    </>
  );
}
