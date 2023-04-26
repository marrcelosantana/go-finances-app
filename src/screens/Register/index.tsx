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
import { TabNavigatorRouterProps } from "@routes/tab.routes";

import { Actions, Container, Fields, Form, Header, Title } from "./styles";
interface FormData {
  name: string;
  amount: string;
}

const schema = yup.object({
  name: yup.string().trim().required("Informe o nome da transação."),
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

  const navigator = useNavigation<TabNavigatorRouterProps>();
  const toast = useToast();

  const { control, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  function handleRegister(form: FormData) {
    if (!typeSelected) {
      return toast.show({
        title: "Selecione o tipo da transação.",
        placement: "top",
        bgColor: "red.500",
        color: "gray.100",
      });
    }

    if (category.key === "category") {
      return toast.show({
        title: "Selecione a categoria da transação.",
        placement: "top",
        background: "red.500",
        color: "gray.100",
      });
    }

    const data = {
      name: form.name,
      amount: form.amount,
      typeSelected,
      category: category.key,
    };

    console.log(data);

    toast.show({
      title: "Transação adicionada com sucesso!",
      placement: "top",
      background: "green.500",
      color: "gray.100",
    });

    navigator.navigate("dashboard");
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
              name="name"
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
                title="Income"
                type="income"
                onPress={() => {
                  setTypeSelected("income");
                }}
                isActive={typeSelected === "income"}
              />
              <TypeButton
                title="Outcome"
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
