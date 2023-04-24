import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

interface TypeProps {
  type: "income" | "outcome" | "total";
}

export const Container = styled.View<TypeProps>`
  width: ${RFValue(239.5)}px;
  height: ${RFValue(160)}px;
  padding: 24px 24px 42px 24px;
  border-radius: 5px;
  justify-content: space-between;
  margin-right: 16px;

  background-color: ${({ theme, type }) =>
    type === "total" ? theme.COLORS.ORANGE : theme.COLORS.WHITE};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;

  color: ${({ theme, type }) =>
    type === "total" ? theme.COLORS.WHITE : theme.COLORS.TITLE};
`;

export const Icon = styled(Feather)<TypeProps>`
  font-size: ${RFValue(26)}px;

  ${({ type }) =>
    type === "income" &&
    css`
      color: ${({ theme }) => theme.COLORS.GREEN};
    `}

  ${({ type }) =>
    type === "outcome" &&
    css`
      color: ${({ theme }) => theme.COLORS.RED};
    `}

  ${({ type }) =>
    type === "total" &&
    css`
      color: ${({ theme }) => theme.COLORS.WHITE};
    `}
`;

export const Footer = styled.View``;

export const Amount = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;

  color: ${({ theme, type }) =>
    type === "total" ? theme.COLORS.WHITE : theme.COLORS.TITLE};
`;

export const LastTransaction = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: 12px;

  color: ${({ theme, type }) =>
    type === "total" ? theme.COLORS.WHITE : theme.COLORS.TEXT};
`;
