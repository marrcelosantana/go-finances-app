import { useTheme } from "styled-components";

import { TransactionDTO } from "@models/TransactionDTO";

import { amountFormatter, dateFormatter } from "@utils/formatters";
import { categories } from "@utils/categories";

import { Trash } from "phosphor-react-native";

import {
  Amount,
  Category,
  Container,
  DeleteButton,
  Footer,
  Header,
  Icon,
  Info,
  Title,
  TitleContainer,
} from "./styles";

interface Props {
  transaction: TransactionDTO;
  handleRemoveTransaction: (id: string) => void;
}

export function TransactionCard({
  transaction,
  handleRemoveTransaction,
}: Props) {
  const [category] = categories.filter(
    (item) => item.key === transaction.category
  );

  const theme = useTheme();

  return (
    <Container>
      <Header>
        <TitleContainer>
          <Title>{transaction.title}</Title>
          <DeleteButton onPress={() => handleRemoveTransaction(transaction.id)}>
            <Trash size={22} color={theme.COLORS.TEXT} />
          </DeleteButton>
        </TitleContainer>

        {transaction.type === "outcome" ? (
          <Amount type={transaction.type}>
            -{amountFormatter.format(transaction.amount)}
          </Amount>
        ) : (
          <Amount type={transaction.type}>
            {amountFormatter.format(transaction.amount)}
          </Amount>
        )}
      </Header>

      <Footer>
        <Category>
          <Icon name={category.icon} />
          <Info>{category.name}</Info>
        </Category>

        <Info>{dateFormatter.format(new Date(transaction.date))}</Info>
      </Footer>
    </Container>
  );
}
