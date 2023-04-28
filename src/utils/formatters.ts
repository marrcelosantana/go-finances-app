import { TransactionDTO } from "@models/TransactionDTO";

export const dateFormatter = new Intl.DateTimeFormat("pt-BR");

export const dateFormatterLong = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "long",
});

export const amountFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export function lastTransactionFormatter(
  data: TransactionDTO[],
  type: "income" | "outcome"
) {
  const lastTransaction = Math.max.apply(
    Math,
    data
      .filter((transaction) => transaction.type === type)
      .map((transaction) => new Date(transaction.date).getTime())
  );

  return lastTransaction;
}
