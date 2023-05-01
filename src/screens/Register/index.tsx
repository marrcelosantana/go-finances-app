import { useState } from "react";
import { Modal, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useToast } from "native-base";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { TypeButton } from "@components/TypeButton";
import { Select } from "@components/Select";
import { CategoryModal } from "@components/CategoryModal";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";

import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRouterProps } from "@routes/app.routes";

import uuid from "react-native-uuid";

import { storageTransactionsCreate } from "@storage/storageTransactions";
import { TransactionDTO } from "@models/TransactionDTO";

import { Actions, Container, Fields, Form, Header, Title } from "./styles";

interface FormData {
  title: string;
  amount: string;
}

const schema = yup.object({
  title: yup.string().trim().required("Informe o título da transação."),
  amount: yup
    .number()
    .positive()
    .required("Informe o valor da transação.")
    .typeError("Informe um valor numérico."),
});

export function Register() {
  const [typeSelected, setTypeSelected] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [category, setCategory] = useState({
    key: "category",
    name: "Categoria",
  });

  const navigator = useNavigation<AppNavigatorRouterProps>();
  const toast = useToast();

  const { control, handleSubmit, reset } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  async function handleRegister({ title, amount }: FormData) {
    if (!typeSelected || category.key === "category") {
      return toast.show({
        title: "Você esqueceu alguma informação.",
        placement: "top",
        bgColor: "red.500",
        color: "gray.100",
      });
    }

    const newTransaction: TransactionDTO = {
      id: String(uuid.v4()),
      title: title,
      amount: Number(amount),
      type: typeSelected,
      category: category.key,
      date: new Date(),
    };

    try {
      await storageTransactionsCreate(newTransaction);

      await toast.show({
        title: "Transação adicionada com sucesso!",
        placement: "top",
        background: "green.500",
        color: "gray.100",
      });

      reset();
      setTypeSelected("");
      setCategory({
        key: "category",
        name: "Categoria",
      });

      navigator.navigate("dashboard");
    } catch (error) {
      await toast.show({
        title: "Não foi possível salvar.",
        placement: "top",
        bgColor: "red.500",
        color: "gray.100",
      });
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>

        <Form>
          <Fields>
            <Controller
              control={control}
              name="title"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Nome"
                  onChangeText={onChange}
                  value={value}
                  autoCapitalize="sentences"
                  autoCorrect={false}
                />
              )}
            />

            <Controller
              control={control}
              name="amount"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Preço"
                  keyboardType="numeric"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />

            <Actions>
              <TypeButton
                title="Entrada"
                type="income"
                onPress={() => {
                  setTypeSelected("income");
                }}
                isActive={typeSelected === "income"}
              />
              <TypeButton
                title="Saída"
                type="outcome"
                onPress={() => {
                  setTypeSelected("outcome");
                }}
                isActive={typeSelected === "outcome"}
              />
            </Actions>

            <Select
              title={category.name}
              onPress={() => {
                setModalOpen(true);
              }}
            />
          </Fields>

          <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
        </Form>

        <Modal visible={modalOpen}>
          <CategoryModal
            category={category}
            setCategory={setCategory}
            closeModal={() => setModalOpen(false)}
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  );
}
