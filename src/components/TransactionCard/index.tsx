import { TransactionDTO } from "@models/TransactionDTO";
import { amountFormatter, dateFormatter } from "@utils/formatters";
import { categories } from "@utils/categories";

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
  const [category] = categories.filter(
    (item) => item.key === transaction.category
  );

  return (
    <Container>
      <Header>
        <Title>{transaction.title}</Title>

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
