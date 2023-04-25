import { TransactionDTO } from "@models/TransactionDTO";

import {
  Amount,
  Category,
  Container,
  Footer,
  Header,
  Icon,
  Info,
  Title,
} from "./styles";

interface Props {
  transaction: TransactionDTO;
}

export function TransactionCard({ transaction }: Props) {
  return (
    <Container>
      <Header>
        <Title>{transaction.title}</Title>

        {transaction.type === "outcome" ? (
          <Amount type={transaction.type}>-{transaction.amount}</Amount>
        ) : (
          <Amount type={transaction.type}>{transaction.amount}</Amount>
        )}
      </Header>

      <Footer>
        <Category>
          <Icon name={transaction.category.icon} />
          <Info>{transaction.category.name}</Info>
        </Category>

        <Info>{transaction.date}</Info>
      </Footer>
    </Container>
  );
}
