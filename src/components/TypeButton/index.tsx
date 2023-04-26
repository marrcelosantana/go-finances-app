import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Button, Container, Icon, Title } from "./styles";

interface Props extends RectButtonProps {
  type: "income" | "outcome";
  title: string;
  isActive: boolean;
}

export function TypeButton({ type, title, isActive, ...rest }: Props) {
  return (
    <Container isActive={isActive} type={type}>
      <Button {...rest}>
        <Icon
          type={type}
          name={type === "income" ? "arrow-up-circle" : "arrow-down-circle"}
        />
        <Title>{title}</Title>
      </Button>
    </Container>
  );
}
