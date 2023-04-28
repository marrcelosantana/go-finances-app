import AsyncStorage from "@react-native-async-storage/async-storage";

import { TRANSACTION_STORAGE } from "./storageConfig";
import { TransactionDTO } from "@models/TransactionDTO";

export async function storageTransactionsGetAll() {
  try {
    const storage = await AsyncStorage.getItem(TRANSACTION_STORAGE);

    const transactions: TransactionDTO[] = storage ? JSON.parse(storage) : [];

    return transactions;
  } catch (error) {
    throw error;
  }
}

export async function storageTransactionsCreate(transaction: TransactionDTO) {
  const storage = await storageTransactionsGetAll();

  const data = JSON.stringify([transaction, ...storage]);
  await AsyncStorage.setItem(TRANSACTION_STORAGE, data);
}

export async function clearStorage() {
  try {
    await AsyncStorage.clear();
    console.log("Storage clear!");
  } catch (error) {
    throw error;
  }
}
