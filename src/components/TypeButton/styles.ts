import { Feather } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import styled, { css } from "styled-components/native";

interface TypeProps {
  type: "income" | "outcome";
}

interface ActiveProps {
  isActive: boolean;
  type: "income" | "outcome";
}

export const Container = styled.View<ActiveProps>`
  width: 48%;
  border-radius: 5px;

  border-width: ${({ isActive }) => (isActive ? 0 : 0.5)}px;
  border-style: solid;
  border-color: ${({ theme }) => theme.COLORS.TEXT};

  ${({ isActive, type }) =>
    isActive &&
    type === "income" &&
    css`
      background-color: ${({ theme }) => theme.COLORS.LIGHT_GREEN};
    `}

  ${({ isActive, type }) =>
    isActive &&
    type === "outcome" &&
    css`
      background-color: ${({ theme }) => theme.COLORS.LIGHT_RED};
    `}

  ${({ isActive }) =>
    isActive &&
    css`
      border: none;
    `}
`;

export const Button = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 18px;
`;

export const Icon = styled(Feather)<TypeProps>`
  font-size: 24px;
  color: ${({ theme, type }) =>
    type === "income" ? theme.COLORS.GREEN : theme.COLORS.RED};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.TITLE};
  font-size: 14px;
  margin-left: 8px;
`;
