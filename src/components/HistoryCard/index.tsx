import { amountFormatter } from "@utils/formatters";
import { Amount, Container, Title } from "./styles";

interface Props {
  name: string;
  total: number;
  color: string;
}

export function HistoryCard({ name, total, color }: Props) {
  return (
    <Container color={color}>
      <Title>{name}</Title>
      <Amount>{amountFormatter.format(total)}</Amount>
    </Container>
  );
}
