import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Icon, Title } from "./styles";

interface Props extends RectButtonProps {
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
