import { useState } from "react";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { TypeButton } from "@components/TypeButton";

import { Actions, Container, Fields, Form, Header, Title } from "./styles";

export function Register() {
  const [typeSelected, setTypeSelected] = useState("");

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />

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
        </Fields>

        <Button title="Enviar" />
      </Form>
    </Container>
  );
}
