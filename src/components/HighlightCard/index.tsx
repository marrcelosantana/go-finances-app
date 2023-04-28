import { amountFormatter } from "@utils/formatters";
import {
  Amount,
  Container,
  Footer,
  Header,
  Icon,
  LastTransaction,
  Title,
} from "./styles";

interface Props {
  type: "income" | "outcome" | "total";
  title: string;
  amount: number;
  lastTransaction: string;
}

const icon = {
  income: "arrow-up-circle",
  outcome: "arrow-down-circle",
  total: "dollar-sign",
};

export function HighlightCard({ type, title, amount, lastTransaction }: Props) {
  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title}</Title>
        <Icon name={icon[type]} type={type} />
      </Header>

      <Footer>
        <Amount type={type}>{amountFormatter.format(amount)}</Amount>
        <LastTransaction type={type}>{lastTransaction}</LastTransaction>
      </Footer>
    </Container>
  );
}
