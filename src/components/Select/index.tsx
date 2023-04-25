import React from "react";
import { PressableProps } from "react-native";
import { Container, Icon, Title } from "./styles";

interface Props extends PressableProps {
  title: string;
}

export function Select({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
      <Icon name="chevron-down" />
    </Container>
  );
}
