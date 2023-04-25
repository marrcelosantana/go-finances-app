import { useState } from "react";
import { Modal } from "react-native";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { TypeButton } from "@components/TypeButton";
import { Select } from "@components/Select";

import { Actions, Container, Fields, Form, Header, Title } from "./styles";
import { CategoryModal } from "@components/CategoryModal";

export function Register() {
  const [typeSelected, setTypeSelected] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const [category, setCategory] = useState({
    key: "category",
    name: "Categoria",
  });

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" keyboardType="numeric" />

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

        <Button title="Enviar" />
      </Form>

      <Modal visible={modalOpen}>
        <CategoryModal
          category={category}
          setCategory={setCategory}
          closeModal={() => setModalOpen(false)}
        />
      </Modal>
    </Container>
  );
}
