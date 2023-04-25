import { CategoryDTO } from "./CategoryDTO";

export type TransactionDTO = {
  type: "income" | "outcome";
  title: string;
  amount: string;
  category: CategoryDTO;
  date: string;
};
