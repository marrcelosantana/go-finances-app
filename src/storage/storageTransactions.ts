import AsyncStorage from "@react-native-async-storage/async-storage";

import { TRANSACTION_STORAGE } from "./storageConfig";
import { TransactionDTO } from "@models/TransactionDTO";

export async function storageTransactionsGetAll(userId: string) {
  try {
    const storage = await AsyncStorage.getItem(
      `${TRANSACTION_STORAGE}_user:${userId}`
    );

    const transactions: TransactionDTO[] = storage ? JSON.parse(storage) : [];

    return transactions;
  } catch (error) {
    throw error;
  }
}

export async function storageTransactionsCreate(
  transaction: TransactionDTO,
  userId: string
) {
  try {
    const storage = await storageTransactionsGetAll(userId);

    const data = JSON.stringify([transaction, ...storage]);
    await AsyncStorage.setItem(`${TRANSACTION_STORAGE}_user:${userId}`, data);
  } catch (error) {
    throw error;
  }
}

export async function storageTransactionsRemove(id: string, userId: string) {
  try {
    const storage = await storageTransactionsGetAll(userId);

    const storageFiltered = storage.filter(
      (transaction: TransactionDTO) => transaction.id !== id
    );

    const newStorage = JSON.stringify(storageFiltered);
    await AsyncStorage.setItem(
      `${TRANSACTION_STORAGE}_user:${userId}`,
      newStorage
    );
  } catch (error) {
    throw error;
  }
}

export async function clearStorage() {
  try {
    await AsyncStorage.clear();
    console.log("Storage clear!");
  } catch (error) {
    throw error;
  }
}
