import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

interface TypeProps {
  type: "income" | "outcome";
}

interface ActiveProps {
  isActive: boolean;
  type: "income" | "outcome";
}

export const Container = styled(TouchableOpacity)<ActiveProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 48%;
  padding: 18px;
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
