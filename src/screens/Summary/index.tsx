import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { Center, FlatList, useToast } from "native-base";

import { HistoryCard } from "@components/HistoryCard";
import { Loading } from "@components/Loading";

import { storageTransactionsGetAll } from "@storage/storageTransactions";
import { TransactionDTO } from "@models/TransactionDTO";
import { categories } from "@utils/categories";

import { useTheme } from "styled-components";
import { Coins } from "phosphor-react-native";

import { VictoryPie } from "victory-native";
import { addMonths, subMonths, format } from "date-fns";
import { ptBR } from "date-fns/locale";

import {
  ArrowButton,
  ChartContainer,
  Container,
  Content,
  EmptyContent,
  EmptyText,
  Header,
  Icon,
  Month,
  MonthContainer,
  Title,
} from "./styles";

interface CategoryData {
  name: string;
  total: number;
  color: string;
  percent: string;
}

export function Summary() {
  const [transactions, setTransactions] = useState<TransactionDTO[]>([]);
  const [totalByCategory, setTotalByCategory] = useState<CategoryData[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const toast = useToast();
  const theme = useTheme();

  function handleChangeDate(action: "previous" | "next") {
    if (action === "next") {
      const newDate = addMonths(selectedDate, 1);
      setSelectedDate(newDate);
    } else {
      const newDate = subMonths(selectedDate, 1);
      setSelectedDate(newDate);
    }
  }

  async function loadTransactions() {
    try {
      const data = await storageTransactionsGetAll();
      const totalByCategory: CategoryData[] = [];

      const outcomes = data.filter(
        (transaction: TransactionDTO) =>
          transaction.type === "outcome" &&
          new Date(transaction.date).getMonth() === selectedDate.getMonth() &&
          new Date(transaction.date).getFullYear() ===
            selectedDate.getFullYear()
      );

      const outcomesTotal = outcomes.reduce(
        (acumullator: number, transaction: TransactionDTO) => {
          return acumullator + transaction.amount;
        },
        0
      );

      categories.map((category) => {
        let amountByCategory = 0;

        outcomes.map((transaction: TransactionDTO) => {
          if (transaction.category === category.key) {
            amountByCategory += transaction.amount;
          }
        });

        if (amountByCategory > 0) {
          const percent = `${((amountByCategory / outcomesTotal) * 100).toFixed(
            0
          )}%`;

          totalByCategory.push({
            name: category.name,
            total: amountByCategory,
            color: category.color,
            percent,
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
    }, [selectedDate])
  );

  return (
    <Container>
      <Header>
        <Title>Resumo por categoria</Title>
      </Header>

      {transactions ? (
        <Content>
          <MonthContainer>
            <ArrowButton onPress={() => handleChangeDate("previous")}>
              <Icon name="chevron-left" />
            </ArrowButton>

            <Month>
              {format(selectedDate, "MMMM, yyyy", { locale: ptBR })}
            </Month>

            <ArrowButton onPress={() => handleChangeDate("next")}>
              <Icon name="chevron-right" />
            </ArrowButton>
          </MonthContainer>

          {totalByCategory.length > 0 ? (
            <ChartContainer>
              <VictoryPie
                data={totalByCategory}
                x="percent"
                y="total"
                colorScale={totalByCategory.map((category) => category.color)}
                style={{
                  labels: { fontSize: 18, fontWeight: "bold", fill: "#fff" },
                }}
                labelRadius={50}
                height={300}
              />
            </ChartContainer>
          ) : (
            <EmptyContent>
              <Coins size={36} color={theme.COLORS.TEXT} />
              <EmptyText>Sem transações neste mês.</EmptyText>
            </EmptyContent>
          )}

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
            showsVerticalScrollIndicator={false}
          />
        </Content>
      ) : (
        <Center flex={1}>
          <Loading />
        </Center>
      )}
    </Container>
  );
}
