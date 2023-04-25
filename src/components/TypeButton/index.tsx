import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  type: "income" | "outcome";
  title: string;
  isActive: boolean;
}

export function TypeButton({ type, title, isActive, ...rest }: Props) {
  return (
    <Container isActive={isActive} type={type} {...rest}>
      <Icon
        type={type}
        name={type === "income" ? "arrow-up-circle" : "arrow-down-circle"}
      />
      <Title>{title}</Title>
    </Container>
  );
}
